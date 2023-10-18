import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  margin-bottom: 30px;
  border: 1px solid #ec5390;
  border-radius: 4px;
`;

export const Label = styled.label`

  display: flex;
  flex-direction: column;
  gap: 6px 40px;
  font-size: 18px;
`;

export const Input = styled.input`

  width: 200px;
  min-height: 20px;
  border: 1px solid #c4c4c4;
  border-radius: 3px;
`;

export const SubmitButton = styled.button`
  width: 120px;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-top: 10px;
  border: 1px solid #c4c4c4;
  border-radius: 4px;
  cursor: pointer;
  background-color: transparent;
  transition: background-color 0.5s ease;

  &:hover,
  &:focus {
    background-color: #eba4c0;
  }
`;