const formater = new Intl.DateTimeFormat('pt-BR');

const formatDate = (date: string) => {
    const newDate = new Date(date);
    return formater.format(newDate);
};

export { formatDate };
