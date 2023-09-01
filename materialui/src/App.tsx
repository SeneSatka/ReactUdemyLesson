import { ThemeProvider, colors, createTheme } from "@mui/material";
import "./App.css";
import { LessonCustomization } from "./components/LessonCustomization";
// import { LessonTimeLine } from "./components/LessonTimeLine";
// import { LessonMasonry } from "./components/LessonMasonry";
// import { LessonTabs } from "./components/LessonTabs";
// import { LessonDateRange } from "./components/LessonDateRange";
// import { LessonDateTime } from "./components/LessonDateTime";
// import { LessonTable } from "./components/LessonTable";
// import { LessonLoadingButton } from "./components/LessonLoadingButton";
// import { LessonProgress } from "./components/LessonProgress";
// import { LessonSkeleton } from "./components/LessonSkeleton";
// import { LessonSnackBar } from "./components/LessonSnackBar";
// import { LessonAlert } from "./components/LessonAlert";
// import { LessonDialog } from "./components/LessonDialog";
// import { LessonList } from "./components/LessonList";
// import { LessonToolTip } from "./components/LessonToolTip";
// import { LessonAvatar } from "./components/LessonAvatar";
// import { LessonBottomNavigation } from "./components/LessonBottomNavigation";
// import { LessonBadge } from "./components/LessonBadge";
// import { LessonSpeedDial } from "./components/LessonSpeedDial";
// import { LessonBreadCrumb } from "./components/LessonBreadCrumb";
// import { LessonDrawer } from "./components/LessonDrawer";
// import { LessonLink } from "./components/LessonLink";
// import { LessonAppBar } from "./components/LessonAppBar";
// import { LessonImageList } from "./components/LessonImageList";
// import { LessonPaper } from "./components/LessonPaper";
// import { LessonAccordion } from "./components/LessonAccordion";
// import { LessonCard } from "./components/LessonCard";
// import { LessonGrid } from "./components/LessonGrid";
// import { LessonBox } from "./components/LessonBox";
// import { LessonStack } from "./components/LessonStack";
// import { LessonAutoComplete } from "./components/LessonAutoComplete";
// import { LessonCheckBox } from "./components/LessonChec  kBox";
// import { LessonSelect } from "./components/LessonSelect";
// import { LessonRadioExample } from "./components/LessonradioExample";
// import { LessonRadioGroup } from "./components/LessonRadioGroup";
// import { LessonTextField } from "./components/LessonTextField";
// import { LessonButton } from "./components/LessonButton";
// import { LessonButtonGroup } from "./components/LessonButtonGroup";
// import { LessonTypography } from "./components/LessonTypography";
const theme = createTheme({
  palette: { secondary: { main: colors.brown[500] } },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <LessonTypography /> */}
        {/* <LessonButton /> */}
        {/* <LessonButtonGroup /> */}
        {/* <LessonTextField /> */}
        {/* <LessonRadioGroup /> */}
        {/* <LessonRadioExample /> */}
        {/* <LessonSelect /> */}
        {/* <LessonCheckBox /> */}
        {/* <LessonAutoComplete /> */}
        {/* <LessonBox /> */}
        {/* <LessonStack /> */}
        {/* <LessonGrid /> */}
        {/* <LessonCard /> */}
        {/* <LessonAccordion /> */}
        {/* <LessonAppBar /> */}
        {/* <LessonImageList /> */}
        {/* <LessonPaper /> */}
        {/* <LessonLink /> */}
        {/* <LessonBreadCrumb /> */}
        {/* <LessonDrawer /> */}
        {/* <LessonBadge /> */}
        {/* <LessonSpeedDial /> */}
        {/* <LessonBottomNavigation /> */}
        {/* <LessonAvatar /> */}
        {/* <LessonList /> */}
        {/* <LessonToolTip /> */}
        {/* <LessonAlert /> */}
        {/* <LessonDialog /> */}
        {/* <LessonSnackBar /> */}
        {/* <LessonProgress /> */}
        {/* <LessonSkeleton /> */}
        {/* <LessonLoadingButton /> */}
        {/* <LessonTable /> */}
        {/* <LessonDateTime /> */}
        {/* <LessonDateRange /> */}
        {/* <LessonTabs /> */}
        {/* <LessonMasonry /> */}
        {/* <LessonTimeLine /> */}
        <LessonCustomization />
      </div>
    </ThemeProvider>
  );
}
export default App;
