import { Box, Skeleton } from "@mui/material";
import { useState } from "react";

export const LessonSkeleton = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 4000);
  return (
    <Box>
      {loading ? (
        <Skeleton width={250} height={145} animation="wave" />
      ) : (
        <img
          src="https://source.unsplash.com/random/256*144"
          width={250}
          height={145}
          alt="skeleton"
        />
      )}
    </Box>
  );
};
