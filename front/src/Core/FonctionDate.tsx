export function isDateFuture(dateStr: string): boolean {
    // Convertir la chaîne de caractères en objet Date
    const [day, month, year] = dateStr.split('-').map(Number);
    const date = new Date(year, month - 1, day);
  
    // Obtenir la date actuelle
    const today = new Date();
  
    // Comparer les dates
    if (date.getTime() > today.getTime()) {
      return true; // La date est dans le futur
    } else {
      return false; // La date est dans le passé ou aujourd'hui
    }
  }