import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
type guildData = {
  guildName: string;
  memberCount: number;
  id: number;
};
const data: Array<guildData> = [
  { guildName: "Test1", memberCount: 10, id: 100 },
  { guildName: "Test2", memberCount: 20, id: 200 },
  { guildName: "Test3", memberCount: 30, id: 300 },
];
export const LessonTable = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Guild Name</TableCell>
          <TableCell>Member Count</TableCell>
          <TableCell>ID</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((_guild: guildData, _id) => (
          <TableRow key={_id}>
            <TableCell>{_guild.guildName}</TableCell>
            <TableCell>{_guild.memberCount}</TableCell>
            <TableCell>{_guild.id}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
