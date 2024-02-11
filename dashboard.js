const Dashboard = document.querySelector("#dashboard");

fetch("https://employee-api-beta.vercel.app/fetch", { method: "get" })
  .then((res) => res.json())
  .then((data) => {
    data.map(
      ({
        Proposed_Role,
        Name_of_Resource,
        Location,
        Date_of_Joining,
        Employee_code,
        Email_iD_personal,
        Email_iD_Official,
        Contact_number,
        Emergency_contact_number,
        Business_Unit,
        Department,
        Reporting_Manager,
      }) => {
        let tr = document.createElement("tr");
        //  Repeat
        let td1 = document.createElement("td");
        td1.textContent = Proposed_Role;
        tr.appendChild(td1);

        let td2 = document.createElement("td");
        td2.textContent = Name_of_Resource;
        tr.appendChild(td2);

        let td3 = document.createElement("td");
        td3.textContent = Location;
        tr.appendChild(td3);

        let td4 = document.createElement("td");
        td4.textContent = Date_of_Joining;
        tr.appendChild(td4);

        let td5 = document.createElement("td");
        td5.textContent = Employee_code;
        tr.appendChild(td5);

        let td6 = document.createElement("td");
        td6.textContent = Email_iD_personal;
        tr.appendChild(td6);

        let td7 = document.createElement("td");
        td7.textContent = Email_iD_Official;
        tr.appendChild(td7);

        let td8 = document.createElement("td");
        td8.textContent = Contact_number;
        tr.appendChild(td8);

        let td9 = document.createElement("td");
        td9.textContent = Emergency_contact_number;
        tr.appendChild(td9);

        let td10 = document.createElement("td");
        td10.textContent = Business_Unit;
        tr.appendChild(td10);

        let td11 = document.createElement("td");
        td11.textContent = Department;
        tr.appendChild(td11);

        let td12 = document.createElement("td");
        td12.textContent = Reporting_Manager;
        tr.appendChild(td12);

        Dashboard.appendChild(tr);
      }
    );
  })
  .catch((err) => console.log("Error:", err));
