import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
`;

export const StyledLabel = styled.label`
  font-weight: bold;
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: ${({ theme }) => theme.borders.small}
    ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export const StyledTextarea = styled.textarea`
  padding: 0.5rem;
  border: ${({ theme }) => theme.borders.small}
    ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  resize: vertical;
`;

export const FormError = styled.span`
  font-size: 0.75rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.error};
`;

export const SuccessMessage = styled.span`
  color: ${({ theme }) => theme.colors.success};
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;
