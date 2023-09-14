export const formatDate = (date: Date) => {
    return date.toISOString().slice(0,19)
  }
  export const getHtmlDatetime = (iso:string) => {
    const d = new Date(iso);
    return (new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString()).slice(0, -1);
  }