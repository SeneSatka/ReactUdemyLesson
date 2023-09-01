import { Breadcrumbs, Link } from "@mui/material";

export const LessonBreadCrumb = () => {
  return (
    <Breadcrumbs separator=">" maxItems={2}>
      <Link href="/" underline="hover">
        AnaSayfa
      </Link>
      <Link href="/" underline="hover">
        Projeler
      </Link>
      <Link underline="none">Test1</Link>
    </Breadcrumbs>
  );
};
