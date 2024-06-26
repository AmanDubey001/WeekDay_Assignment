export const ROLE = [
  { title: "Backend" },
  { title: "Frontend" },
  { title: "FullStack" },
  { title: "IOS" },
  { title: "ReactNative" },
  { title: "Flutter" },
  { title: "Tech Lead" },
  { title: "Dev Ops" },
  { title: "HR" },
  { title: "Finance" },
  { title: "Product Manager" },
  { title: "Graphic Designer" },
];

export const EMPLOYEES = [
  { title: "1-10" },
  { title: "11-20" },
  { title: "50-100" },
  { title: "201-500" },
];

export const EXPERIENCE = [
  { title: "1" },
  { title: "2" },
  { title: "3" },
  { title: "4" },
  { title: "5" },
  { title: "6" },
  { title: "7" },
  { title: "8" },
  { title: "9" },
  { title: "10" },
];

export const JOB_TYPE = [
  { title: "Remote" },
  { title: "Hybrid" },
  { title: "InOffice" },
];

export const SALARY = [
  { title: "0L" },
  { title: "10L" },
  { title: "20L" },
  { title: "30L" },
  { title: "40L" },
  { title: "50L" },
  { title: "60L" },
  { title: "70L" },
];

export const CheckLocation = (item, jobType) => {
  if (jobType?.length) {
    const result = jobType?.map((res) => {
      if (item?.location) {
        if (res?.title?.toLowerCase() === item?.location) return true;
        else if (res?.title === "InOffice" && item?.location !== "remote")
          return true;
        else return false;
      } else return false;
    });
    return result?.find((res) => res === true);
  } else return true;
};

export const CheckJobRole = (item, roles) => {
  if (roles?.length) {
    return roles?.find((res) =>
      res?.title?.toLowerCase()?.includes(item?.jobRole)
    );
  } else return true;
};
export const CheckExp = (item, experience) => {
  if (experience?.length) {
    return experience?.find((res) => res?.title >= item?.minExp);
  } else return true;
};

export const CheckSalary = (item, salary) => {
  if (salary?.length) {
    return salary?.find(
      (res) => parseInt(res?.title) <= parseInt(item?.minJdSalary)
    );
  } else return true;
};

export const CheckCompany = (item, value) => {
  if (value?.length) {
    const search = value.toUpperCase().slice(0,1) + value.toLowerCase().slice(1);
    return item?.companyName?.startsWith(search)
  } else return true;
};

export const DisplaySalary = (item) => {
  if (item?.minJdSalary && item?.maxJdSalary)
    return `${item?.minJdSalary}-${item?.maxJdSalary} LPA`;
  else if (item?.minJdSalary) return `From ${item?.minJdSalary} LPA`;
  else if (item?.maxJdSalary) return `${item?.maxJdSalary} LPA`;
  else return `Not Disclosed`;
};
