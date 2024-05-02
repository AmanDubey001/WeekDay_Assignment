import { Autocomplete, Box, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Filters from "../components/Filters";
import { CheckExp, CheckJobRole, CheckLocation, CheckSalary, EMPLOYEES, EXPERIENCE, JOB_TYPE, ROLE, SALARY } from "./Data";
import JobDetailsCard from "../components/JobDetailsCard";
import noData from "../assets/noData.png"

const SearchPage = () => {
  const [roles, setRoles] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [experience, setExperience] = useState([]);
  const [jobType, setJobType] = useState([]);
  const [salary, setSalary] = useState([]);
  const [companyName,setCompanyName] = useState("");
  const [details,setDetails] = useState([]);
  const [filteredDetails,setFilteredDetails] = useState([]);
  const [page,setPage] = useState(0);
  const [loading,setLoading] = useState(false);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    setLoading(true);
    const raw = JSON.stringify({
      limit: 10,
      offset: page,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      requestOptions
      )
      .then((response) => response.text())
      .then((result) => {
        setLoading(false);
        const res = JSON.parse(result);
        setDetails([...details,...res?.jdList]);
        setFilteredDetails([...filteredDetails,...res?.jdList])
      })
      .catch((error) => {
        setLoading(false);
        console.error(error)}
        );
  }, [page]);



  useEffect(()=>{

  const filteredData = details?.filter(item =>{
 
 return(
     CheckJobRole(item,roles) && CheckExp(item,experience) && CheckSalary(item,salary) && CheckLocation(item,jobType)
    )
   })

   setFilteredDetails([...filteredData]);
  },[roles,experience,salary,jobType,details])

const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
      setPage(prevPage => prevPage + 1);
    }
  };


  return (
    <Box>
      <Grid container columnGap={2} rowGap={0} justifyContent="center" alignItems="center" p={2}>
        <Grid xs={12} sm={5} md={2.5}  item>
          <Filters
            data={ROLE}
            label="Roles"
            value={roles}
            setValue={setRoles}
          />
        </Grid>
        {/* <Grid xs={7} md={4} lg={3} item>
          <Filters
            data={EMPLOYEES}
            label="No Of Employees"
            value={employees}
            setValue={setEmployees}
          />
        </Grid> */}
        <Grid xs={12} sm={5} md={2.5}  item>
          <Filters
            data={EXPERIENCE}
            label="Experience"
            value={experience}
            setValue={setExperience}
          />
        </Grid>
        <Grid xs={12} sm={5} md={2.5}  item>
          <Filters
            data={JOB_TYPE}
            label="Job Type"
            value={jobType}
            setValue={setJobType}
          />
        </Grid>
        <Grid xs={12} sm={5} md={2.5}  item>
          <Filters
            data={SALARY}
            label="Minimum Base Pay Salary"
            value={salary}
            setValue={setSalary}
          />
        </Grid>
        {/* <Grid item>
        <TextField
          type="text"
          sx={{ minWidth: 200, maxWidth: 300 }}
          autoFocus={false}
          value={companyName}
          onChange={e=>setCompanyName(e.target.value)}
          size="small"
          placeholder="Search Company Name"
        /> 
        </Grid> */}
      </Grid>
      <Grid container p={2} rowSpacing={4} columnSpacing={4} >
      {filteredDetails?.length ? filteredDetails?.map(item =>{
        return(
          <Grid item xs={12} sm={6} md={4}>
          <JobDetailsCard item={item}/>
          </Grid>
        )
      }) : (!loading && (roles?.length || experience?.length || jobType?.length || salary?.length)) ?(<Box sx={{width:"100%",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
           <img src={noData} width="200px"/>
           <Typography mt={2} variant="h6" sx={{fontWeight:700,letterSpacing:1}}>No Jobs available for this category at the moment</Typography>
           </Box>) : (<></>) }
      <Box mt={1} sx={{width:"100%",textAlign:"center"}}> {loading ? <CircularProgress/> : ""}</Box>
      </Grid>
    </Box>
  );
};

export default SearchPage;
