// username, password
// organization
// boards
// issues

const express = require("express");

const PORT = 3000;

const username = [{
    id: "1",
    username: "nathies",
    password: "2345"
}, {
    id: "2",
    username: "kirthiga",
    password: "99898"
}];

const organization = [{
    id: "org1",
    organizationName: "100xdevs cohort",
    admin: "1",
    members: ["2"]
}];

const boards = [{
    id: "b1",
    organizationId: "org1",
    title: "Frontend",
}];

const issues = [{
    id: "i1",
    boardsId: "b1",
    title: "Create Dark mode"
}];

const app = express();

app.use(express.json());


// Post - CREATE
signup
signin
createOrg
addMemberToOrg
createBoard
creareIssue

// get - READ
boards
issues
members

// put - UPDATE
issues

// delete - DELETE
members

app.listen(PORT, () => {
    console.log(`The server is running in ${PORT}`);
});