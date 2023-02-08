import React, { useState } from "react";
import { curriculum } from "../curriculums/it-2019.json";
import "./styles.css";
import { grades } from "./grade";
import { Button, Container, Col, Form, Row } from "react-bootstrap";

const years = ["2023", "2022", "2021", "2020", "2019"];
const semester = ["1", "2", "3"];

function AddITSubject(props) {
  const { AddSubject, allCourses, calculateGPA } = props;
  const [_semester, setSemester] = useState("1");
  const [_year, setYear] = useState(years[0]);
  const [_groupName, setGroupName] = useState(curriculum.courses[0].groupName);
  const [_course, setCourse] = useState(curriculum.courses[0].groupName);
  const [_grade, setGrade] = useState(grades[0]?.value);
  const [_subject, setSubject] = useState(
    curriculum.courses[0].subjects[0].name
  );

  const AddSubjectHandler = () => {
    const result = {
      year: _year,
      semester: _semester,
      score: _grade,
      subject: _subject,
      courseGroupName: _groupName,
    };
    AddSubject(result);
  };

  return (
    <Container className="main-body">
      <Row>
        <Col md="auto">
          <label className="form-label">Semester</label>
          <Form.Select
            value={_semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            {semester.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col>
          <label className="form-label">Year</label>
          <Form.Select
            className="dropdown-year"
            value={_year}
            onChange={(e) => setYear(e.target.value)}
          >
            {years?.map((y, i) => (
              <option key={i} value={y}>
                {y}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <label className="form-label">Course</label>
          <Form.Select
            className="dropdown-course"
            onChange={(e) => {
              setCourse(e.target.value);
            }}
          >
            {curriculum.courses.map((c) => (
              <option key={c.groupName} value={c.groupName}>
                {c.groupName}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col md="auto">
          <label className="form-label">Subject</label>
          <Form.Select onChange={(e) => setSubject(e.target.value)}>
            {!!_course &&
              curriculum.courses
                .find((eachCourse) => eachCourse.groupName === _course)
                .subjects.map((eachSubject) => (
                  <option key={eachSubject.name} value={eachSubject.name}>
                    {eachSubject.name}
                  </option>
                ))}
          </Form.Select>
        </Col>
        <Col md="auto">
          <label className="form-label">Grade</label>
          <Form.Select
            className="dropdown-grade"
            value={_grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            {grades?.map((g, i) => (
              <option key={i} value={g?.value}>
                {g?.label}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            className="btn-addsub"
            variant="primary"
            onClick={AddSubjectHandler}
          >
            Add Subject
          </Button>
          <Button
            className="btn-calgpa"
            variant="success"
            disabled={allCourses.length === 0}
            onClick={calculateGPA}
          >
            Calculate GPA
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default AddITSubject;
