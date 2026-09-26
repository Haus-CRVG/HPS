function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads') || SpreadsheetApp.getActiveSpreadsheet().insertSheet('Leads');
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Data','Nome','Empresa','WhatsApp','E-mail','Proteção','Volume','Mensagem','Origem','Mídia','Campanha','Termo','Conteúdo']);
  }
  const p = e.parameter || {};
  sheet.appendRow([p.data || new Date(), p.nome || '', p.empresa || '', p.whatsapp || '', p.email || '', p.protecao || '', p.volume || '', p.mensagem || '', p.origem || 'site', p.midia || '', p.campanha || '', p.termo || '', p.conteudo || '']);
  return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
}
