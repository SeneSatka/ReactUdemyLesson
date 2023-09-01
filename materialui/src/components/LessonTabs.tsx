import { Tab, TabList, TabPanel, Tabs } from "@mui/joy";

export const LessonTabs = () => {
  return (
    <Tabs defaultValue={0}>
      <TabList>
        <Tab>İlk</Tab>
        <Tab>İkinci</Tab>
        <Tab>Üçüncü</Tab>
      </TabList>
      <TabPanel value={0}>İlk</TabPanel>
      <TabPanel value={1}>İkinci</TabPanel>
      <TabPanel value={2}>Üçüncü</TabPanel>
    </Tabs>
  );
};
