import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
import Head from 'next/head';
import { Table, Center, Container, Button } from '@mantine/core';
import { styled } from 'styled-components';
import { useRouter } from 'next/router';

faker.seed(123);

const generateEmployee = () => ({
  id: faker.string.uuid(),
  avatar: faker.image.avatar(),
  birthday: faker.date.birthdate(),
  email: faker.internet.email(),
  fullName: faker.person.fullName(),
  sex: faker.person.sexType(),
  role: faker.person.jobTitle(),
  votes: 0,
});

const List = () => {
  const router = useRouter();
  const [employeeList, setEmployeeList] = useState(Array.from({ length: 10 }, generateEmployee));

  const handleVote = (id) => {
    const updatedList = employeeList.map((employee) =>
      employee.id === id ? { ...employee, votes: employee.votes + 1 } : employee
    );

    updatedList.sort((a, b) => b.votes - a.votes);
    setEmployeeList(updatedList);
  };

  const handleClick = (id) => {
    const employee = employeeList.find((employee) => employee.id === id);
    router.push({
      pathname: `/detail/${id}`,
      query: { employee: JSON.stringify(employee) },
    });
  };

  return (
    <>
      <Head>
        <title>Employess Voting App</title>
      </Head>
      <StyledContainer size="lg" px="lg">
        <Center>
          <Table captionSide="bottom" striped highlightOnHover withBorder>
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Birthday</th>
                <th>Role</th>
                <th>Votes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employeeList.map((employee) => (
                <tr key={employee.id} itemScope itemType="https://schema.org/Person">
                  <td>
                    <div size="md" onClick={() => handleClick(employee.id)}>
                      <StyledImg src={employee.avatar} alt="Avatar" width={50} height={50} itemProp="image" />
                    </div>
                  </td>
                  <td itemProp="name">{employee.fullName}</td>
                  <td itemProp="email">{employee.email}</td>
                  <td itemProp="birthDate">{employee.birthday.toISOString()}</td>
                  <td itemProp="jobTitle">{employee.role}</td>
                  <td >{employee.votes}</td>
                  <td>
                    <Button size="xs" onClick={() => handleVote(employee.id)} >Vote</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Center>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled(Container)`
  background-color: white;
  padding: 30px;
`;

const StyledImg = styled.img`
    border-radius:100%;
    cursor:pointer
 
`;



export default List;