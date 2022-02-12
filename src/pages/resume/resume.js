import React from 'react'
import CompanyInfo from "../../components/companyInfo/companyInfo";
import JandJLogo from '../../assets/jandj.jpeg'
import TrimbleLogo from '../../assets/trimble.jpeg'
export default  function Resume() {
    return(
        <div>
            <CompanyInfo
                name={"Johnson and Johnson"}
                image={JandJLogo}
                location={"Raritan, NJ"}
                jobTitle={"Software Engineering Developer"}
                team={"Web and Mobile Applications Team"}
                dates={"July 2020 - Current"}
            />
            <CompanyInfo
                name={"Trimble Maps"}
                image={TrimbleLogo}
                location={"Princeton, NJ"}
                jobTitle={"Software Engineering Intern"}
                team={"Server and Web Applications Team"}
                dates={"April 2019 - September 2019"}
            />
        </div>
    )
}