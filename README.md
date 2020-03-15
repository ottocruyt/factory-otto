# factory-otto

## changes:

### Json:
- date format in the json file changed to YYYY-MM-DD (as required for HTML date input value)

### halListItem:
- aantal acties wordt berekend via functie calculateAantalActiesBinnen24u(hal)

### app.js:
- axios.get('http://localhost:3000/hallen.json'); -> absoluut pad zodat deze ook werkt wanneer niet in de root / dir.
