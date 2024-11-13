var Status;
(function (Status) {
    Status["Success"] = "complete";
    Status[Status["Faliure"] = -1] = "Faliure";
    Status["Pending"] = "processing";
})(Status || (Status = {}));
console.log(Status.Faliure);
