import { Indent } from "@/app/placement/contracts";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { convertToTitleCase, getDate, getNameFromEmail } from "@/utils";
import { placementHeaders } from "./tableConfig";
const PlacementTable = ({ indents }: { indents: Indent[] }) => {
  const getsubStatusTimeDifference = (subStatusTimeDifference: number) => {
    const day = parseInt("" + subStatusTimeDifference / (24 * 3600));
    const remainingHours = subStatusTimeDifference % (24 * 3600);
    const hour = parseInt("" + remainingHours / 3600);
    const minutes = subStatusTimeDifference / 60;

    if (minutes < 60) {
      return `${minutes ? Math.floor(minutes) + "m" : ""}`;
    } else {
      return day || hour || minutes
        ? `${day ? day + "d" : ""} ${hour ? hour + "h" : ""} `
        : "-";
    }
  };
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          {placementHeaders.map((header) => (
            <TableHead key={""}>{header.label}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {indents?.map((indent) => (
          <TableRow key={indent.demandId}>
            <TableCell className="font-large">{indent.demandId}</TableCell>
            <TableCell className="font-medium">
              {indent.laneName &&
                `${convertToTitleCase(
                  indent.laneName.split("-")[0]
                )}-${convertToTitleCase(indent.laneName.split("-")[1])} `}
              {indent.viaPointCount && `(${indent.viaPointCount} Via)`}
            </TableCell>
            <TableCell>
              {`${getDate(indent.loadingTime).split(" ")[2]} ${
                getDate(indent.loadingTime).split(" ")[1]
              } ${getDate(indent.loadingTime).split(" ")[3].slice(2)} ${getDate(
                indent.loadingTime
              )
                .split(" ")[4]
                .slice(0, 5)}`}
            </TableCell>
            <TableCell>
              {!!indent?.consignerFreight ? indent.consignerFreight : "-"}
            </TableCell>
            <TableCell>
              {!!indent?.operatorFreight ? indent.operatorFreight : "-"}
            </TableCell>
            <TableCell>
              {!!indent?.subStatus ? ` ${indent.subStatus}` : "-"}
            </TableCell>
            <TableCell>
              {getsubStatusTimeDifference(indent.subStatusTimeDifference)}
              {indent?.subStatus === "DR Book" && indent.drBookingTimeLeft
                ? `${getsubStatusTimeDifference(indent.drBookingTimeLeft)}`
                : ""}
            </TableCell>
            <TableCell>
              {indent.assignedTo && indent.assignedTo.includes("@")
                ? getNameFromEmail(indent.assignedTo)
                : indent.assignedTo}
              {!indent.assignedTo && (
                <span className="aligned-text task" onClick={() => indent}>
                  {indent.status &&
                    indent.status === "PENDING" &&
                    !indent.assignedTo &&
                    "Assign"}
                </span>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PlacementTable;
