import React, { useState, useEffect } from "react";
import AddCsSubject from "./addCsSubject";
import "../components/styles.css";
import { grades } from "./grade";
import { Button, Container, Col, Row, Table } from "react-bootstrap";

function CSMain() {
  const [allCourses, setAllCourses] = useState([]);
  const [_gpa, setGpa] = useState(null);

  useEffect(() => {
    getAllCourses();
  }, []);

  const getAllCourses = () => {
    localStorage.getItem("@allCourses") &&
      setAllCourses(JSON.parse(localStorage.getItem("@allCourses")));
  };

  const AddSubjectHandler = (subject) => {
    setAllCourses([
      ...allCourses,
      {
        ...subject,
        courseYear: `${subject?.semester}/${subject?.year}`,
        id: Math.random(),
      },
    ]);
    // console.log(allCourses);
    // console.log(subject);
    localStorage.setItem(
      "@allCourses",
      JSON.stringify([
        ...allCourses,
        {
          ...subject,
          courseYear: `${subject?.semester}/${subject?.year}`,
          id: Math.random(),
        },
      ])
    );
  };

  const CalculateGpa = () => {
    let total = 0;
    let totalSem = 0;
    allCourses.map((result) => {
      if (result?.score === "0") {
        total += 0;
        totalSem++;
      }
      if (parseFloat(result.score)) {
        total += parseFloat(result.score);
        totalSem++;
      }
      return null;
    });
    console.log(total, allCourses?.length);
    setGpa(total / totalSem);
  };

  const onDelete = (id) => {
    const updated = allCourses.filter((result, i) => result?.id !== id);
    setAllCourses(updated);
    localStorage.setItem("@allCourses", JSON.stringify(updated));
  };

  const groups = allCourses?.reduce((groups, r) => {
    const date = r.courseYear;
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(r);
    return groups;
  }, {});

  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      courses: groups[date],
    };
  });

  console.log(groupArrays);

  const calculateGrade = (arr) => {
    let total = 0;
    let totalSubjects = 0;
    console.log(arr);
    arr.map((result) => {
      if (result?.score === "0") {
        total += 0;
        totalSubjects++;
      }
      if (parseFloat(result.score)) {
        total += parseFloat(result.score);
        totalSubjects++;
      }
      return null;
    });

    return (total / totalSubjects)?.toFixed(2);
  };

  const getGrade = (score) => {
    if (score === "0") {
      return "F";
    }
    if (parseFloat(score)) {
      const u = grades.filter((g) => g.value === parseFloat(score));
      console.log(u);
      if (u?.[0]) {
        console.log(u);
        return u[0].label;
      }
      return "";
    } else {
      const u = grades.filter((g) => g.value === score);
      console.log(u);
      if (u?.[0]) {
        console.log(u);
        return u[0].label;
      }
      return "";
    }
  };
  console.log(_gpa);
  return (
    <Container fluid>
      <Row>
        <Col className="main-header">Computer Science</Col>
      </Row>
      <Row>
        <AddCsSubject
          allCourses={allCourses}
          AddSubject={AddSubjectHandler}
          calculateGPA={CalculateGpa}
        />
        {!!allCourses?.length && (
          <Button
            className="btn-reset"
            variant="danger"
            onClick={() => {
              setAllCourses([]);
              localStorage.removeItem("@allCourses");
              setGpa(null);
            }}
          >
            Reset
          </Button>
        )}
      </Row>
      <Row>
        {_gpa && <h3 className="CGPA"> CGPA: {Number(_gpa)?.toFixed(2)}</h3>}

        {groupArrays?.map((group, i) => {
          return (
            <Container key={i}>
              <p className="semester-p">Semester: {group.date}</p>
              <p className="total-gpa">
                Total GPA: {calculateGrade(group.courses)}
              </p>
              <Table striped className="grade-table">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Grade</th>
                  </tr>
                </thead>
              </Table>
              {group.courses.map((r, j) => {
                return (
                  <Container key={j} fluid>
                    <Table
                      striped
                      bordered
                      className="grade-table"
                      responsive="false"
                    >
                      <tbody>
                        <tr>
                          <td className="grade-table-body">{r?.subject}</td>
                          <td>
                            <span>{getGrade(r?.score)}</span>
                            <Button
                              variant="danger"
                              className="btn-delete"
                              onClick={() => onDelete(r?.id)}
                            >
                              Remove
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Container>
                );
              })}
            </Container>
          );
        })}
      </Row>
    </Container>
  );
}

export default CSMain;
