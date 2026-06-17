// ============================================================
//  CONFIGURAÇÃO — projeto Supabase
//  (a anon key é PÚBLICA por design; a segurança vem das policies)
// ============================================================
window.APP_CONFIG = {
  SUPABASE_URL: "https://ptmopsjsdtkwnwprvbse.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0bW9wc2pzZHRrd253cHJ2YnNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA1MTM0NDEsImV4cCI6MjA5NjA4OTQ0MX0.qxMz6hXvfy7Vfk3s1P5yd67CznUFVSPvCDLWlGfjUyU",

  // E-mails ADMIN (podem subir/atualizar relatórios). Os demais entram como LÍDER (só visualizam).
  ADMIN_EMAILS: ["lucassilveira@doctum.edu.br"],

  BUCKET: "relatorios",
  FILES: { lig: "ligacoes.xls", mat: "matriculas.xlsx", at: "atendimentos.xls", aval: "avaliacoes.xls", comp: "comparativo.xlsx" }
};
