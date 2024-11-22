const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const studens = await getAllStudents();
    res.json({studens})
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const payload = {
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone,
        dob: req.body.dob,
        currentAddress: req.body.currentAddress,
        permanentAddress: req.body.permanentAddress,
        fatherName: req.body.fatherName,
        fatherPhone: req.body.fatherPhone,
        motherName: req.body.motherName,
        motherPhone: req.body.motherPhone,
        guardianName: req.body.guardianName,
        guardianPhone: req.body.guardianPhone,
        relationOfGuardian: req.body.relationOfGuardian,
        systemAccess: req.body.systemAccess,
        class: req.body.className,
        section: req.body.sectionName,
        admissionDate: req.body.admissionDt,
        roll: req.body.roll
    };

    const { message } = await addNewStudent(payload);
    return res.json({ message });

});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const payload = {
        userId: id,
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        phone: req.body.phone,
        dob: req.body.dob,
        currentAddress: req.body.currentAddress,
        permanentAddress: req.body.permanentAddress,
        fatherName: req.body.fatherName,
        fatherPhone: req.body.fatherPhone,
        motherName: req.body.motherName,
        motherPhone: req.body.motherPhone,
        guardianName: req.body.guardianName,
        guardianPhone: req.body.guardianPhone,
        relationOfGuardian: req.body.relationOfGuardian,
        systemAccess: req.body.systemAccess,
        class: req.body.className,
        section: req.body.sectionName,
        admissionDate: req.body.admissionDt,
        roll: req.body.roll
    };
    
    const result = await updateStudent(payload);
    res.json(result);});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const studentDetail = await getStudentDetail(id);

    res.json(studentDetail);
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { id: reviewerId } = req.user;
    const { status } = req.body;
    const { message } = await setStudentStatus(id, reviewerId, status);
    res.json({ message });
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
