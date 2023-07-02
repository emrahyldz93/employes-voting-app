import React from 'react';
import { useRouter } from 'next/router';
import { Center, Avatar, Text, Group, Button } from '@mantine/core';
import { styled } from 'styled-components';

const DetailPage = () => {
  const router = useRouter();
  const { id, employee } = router.query;
  const parsedEmployee = JSON.parse(employee);

  const birthDate = new Date(parsedEmployee.birthday);

  const handleGoBack = () => {
    router.back();
  };

  return (
    <StyledCenter itemScope itemType="https://schema.org/Person">
      <div>
        <StyledGroup noWrap>
          <Avatar src={parsedEmployee.avatar} size={150} radius="md" itemProp="image" />
          <div>
            <Text fz="lg" tt="uppercase" fw={700} itemProp="name">
              {parsedEmployee.fullName}
            </Text>

            <Text fz="md" fw={700} itemProp="email">
              {parsedEmployee.email}
            </Text>

            <Text fz="md" fw={700} itemProp="jobTitle">
              {parsedEmployee.role}
            </Text>

            <Text fz="md" fw={700} c="dimmed" itemProp="birthDate">
              {birthDate.toISOString()}
            </Text>
            <Text fz="md" fw={700} c="dimmed" >
              {parsedEmployee.sex}
            </Text>
          </div>
        </StyledGroup>
        <Button onClick={handleGoBack}>Go Back</Button>
      </div>
    </StyledCenter>
  );
};

const StyledGroup = styled(Group)`
  padding: 10px;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const StyledCenter = styled(Center)`
  height: 100vh;
`;

export default DetailPage;
