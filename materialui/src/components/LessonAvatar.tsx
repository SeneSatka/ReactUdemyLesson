import { Avatar, AvatarGroup, Stack } from "@mui/material";

export const LessonAvatar = () => {
  return (
    <Stack direction="row" spacing={2}>
      <AvatarGroup>
        <Avatar
          sx={{ marginRight: 5 }}
          src="https://cdn.discordapp.com/avatars/812347817602842624/005bf1c41171e05b4cfe289949ee236c.png?size=1024"
        />
        <Avatar src="https://cdn.discordapp.com/embed/avatars/0.png" />
      </AvatarGroup>
      <AvatarGroup max={4}>
        <Avatar
          sx={{
            marginRight: 10,
            bgcolor: "primary.light",
            width: 50,
            height: 50,
          }}
        >
          look
        </Avatar>
        <Avatar
          sx={{
            marginRight: 10,
            bgcolor: "error.light",
            width: 50,
            height: 50,
          }}
          variant="rounded"
        >
          ban
        </Avatar>
        <Avatar
          sx={{
            marginRight: 10,
            bgcolor: "primary.light",
            width: 50,
            height: 50,
          }}
        >
          look
        </Avatar>
        <Avatar
          sx={{
            marginRight: 10,
            bgcolor: "error.light",
            width: 50,
            height: 50,
          }}
          variant="rounded"
        >
          ban
        </Avatar>
        <Avatar
          sx={{
            marginRight: 10,
            bgcolor: "primary.light",
            width: 50,
            height: 50,
          }}
        >
          look
        </Avatar>
        <Avatar
          sx={{
            marginRight: 10,
            bgcolor: "error.light",
            width: 50,
            height: 50,
          }}
          variant="rounded"
        >
          ban
        </Avatar>
      </AvatarGroup>
    </Stack>
  );
};
