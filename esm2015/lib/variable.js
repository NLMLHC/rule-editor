export var AllVariableType;
(function (AllVariableType) {
    AllVariableType["question"] = "Question";
    AllVariableType["expression"] = "FHIRPath Expression";
    AllVariableType["simple"] = "Easy Path Expression";
    AllVariableType["query"] = "FHIR Query";
    AllVariableType["queryObservation"] = "FHIR Query (Observation)";
})(AllVariableType || (AllVariableType = {}));
export var SimpleVariableType;
(function (SimpleVariableType) {
    SimpleVariableType["question"] = "Question";
    SimpleVariableType["simple"] = "Easy Path Expression";
    SimpleVariableType["queryObservation"] = "FHIR Query (Observation)";
})(SimpleVariableType || (SimpleVariableType = {}));
export const CASE_REGEX = /^\s*iif\s*\((.*)\)\s*$/;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFibGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1ydWxlLWVkaXRvci9zcmMvbGliL3ZhcmlhYmxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDQSxNQUFNLENBQU4sSUFBWSxlQU1YO0FBTkQsV0FBWSxlQUFlO0lBQ3pCLHdDQUFxQixDQUFBO0lBQ3JCLHFEQUFrQyxDQUFBO0lBQ2xDLGtEQUErQixDQUFBO0lBQy9CLHVDQUFvQixDQUFBO0lBQ3BCLGdFQUE2QyxDQUFBO0FBQy9DLENBQUMsRUFOVyxlQUFlLEtBQWYsZUFBZSxRQU0xQjtBQUVELE1BQU0sQ0FBTixJQUFZLGtCQUlYO0FBSkQsV0FBWSxrQkFBa0I7SUFDNUIsMkNBQXFCLENBQUE7SUFDckIscURBQStCLENBQUE7SUFDL0IsbUVBQTZDLENBQUE7QUFDL0MsQ0FBQyxFQUpXLGtCQUFrQixLQUFsQixrQkFBa0IsUUFJN0I7QUFFRCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFVuZWRpdGFibGVWYXJpYWJsZSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZT86IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmFyaWFibGUge1xuICBfXyRpbmRleD86IG51bWJlcjsgIC8vIE9yaWdpbmFsIGluZGV4IGluIGV4dGVuc2lvbiBsaXN0XG4gIGxhYmVsOiBzdHJpbmc7XG4gIHR5cGU6IHN0cmluZztcbiAgZXhwcmVzc2lvbjogc3RyaW5nO1xuICBzaW1wbGU/OiBzdHJpbmc7XG4gIGxpbmtJZD86IHN0cmluZztcbiAgdW5pdD86IHN0cmluZztcbiAgY29kZXM/OiBBcnJheTxzdHJpbmc+O1xuICB0aW1lSW50ZXJ2YWw/OiBudW1iZXI7XG4gIHRpbWVJbnRlcnZhbFVuaXQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVlc3Rpb24ge1xuICBsaW5rSWQ6IHN0cmluZztcbiAgdGV4dDogc3RyaW5nO1xuICBpdGVtSGFzU2NvcmU/OiBib29sZWFuO1xuICB1bml0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhc2VTdGF0ZW1lbnQge1xuICBjb25kaXRpb246IHN0cmluZztcbiAgc2ltcGxlQ29uZGl0aW9uPzogc3RyaW5nO1xuICBvdXRwdXQ6IHN0cmluZztcbiAgc2ltcGxlT3V0cHV0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBBbGxWYXJpYWJsZVR5cGUge1xuICBxdWVzdGlvbiA9ICdRdWVzdGlvbicsXG4gIGV4cHJlc3Npb24gPSAnRkhJUlBhdGggRXhwcmVzc2lvbicsXG4gIHNpbXBsZSA9ICdFYXN5IFBhdGggRXhwcmVzc2lvbicsXG4gIHF1ZXJ5ID0gJ0ZISVIgUXVlcnknLFxuICBxdWVyeU9ic2VydmF0aW9uID0gJ0ZISVIgUXVlcnkgKE9ic2VydmF0aW9uKSdcbn1cblxuZXhwb3J0IGVudW0gU2ltcGxlVmFyaWFibGVUeXBlIHtcbiAgcXVlc3Rpb24gPSAnUXVlc3Rpb24nLFxuICBzaW1wbGUgPSAnRWFzeSBQYXRoIEV4cHJlc3Npb24nLFxuICBxdWVyeU9ic2VydmF0aW9uID0gJ0ZISVIgUXVlcnkgKE9ic2VydmF0aW9uKSdcbn1cblxuZXhwb3J0IGNvbnN0IENBU0VfUkVHRVggPSAvXlxccyppaWZcXHMqXFwoKC4qKVxcKVxccyokLztcbiJdfQ==