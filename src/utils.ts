// [['29/10/2018', 'Tottenham', 'Man City', '0', '1', 'A', 'K Friend']];
export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString.split('/').map((val: string) => parseInt(val));

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
