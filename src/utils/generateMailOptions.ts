export const generateMailOptions = ({ to, subject, template, context }) => {
  return {
    to,
    subject,
    template,
    context,
  };
};
