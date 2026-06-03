# Painel de Gestão — versão online (Supabase + Vercel)

Tudo o que você precisa fazer está aqui. Não precisa programar nada.

## 1. Supabase (login + armazenamento)
1. Crie conta em https://supabase.com e um **novo projeto** (anote a senha do banco).
2. Em **Settings → API**, copie:
   - **Project URL**
   - **anon public key**
   → cole os dois no arquivo `config.js`.
3. Em **Storage → New bucket**: nome **`relatorios`**, deixe **Private**. Create.
4. **Policies do bucket** (Storage → Policies → bucket `relatorios` → New policy → "For full customization"):
   - **Leitura (todos logados):**
     - Allowed operation: `SELECT`
     - Target roles: `authenticated`
     - USING expression: `true`
   - **Escrita (qualquer logado pode subir)** — simples:
     - Allowed operation: `INSERT` e `UPDATE`
     - Target roles: `authenticated`
     - expression: `true`
   > Observação: assim qualquer usuário logado consegue subir arquivo. O app só MOSTRA o botão de upload para os e-mails da lista `ADMIN_EMAILS`. Se quiser travar o upload no servidor só para admins, dá para evoluir depois (ex.: política checando o e-mail).

## 2. Usuários (login/senha)
- Em **Authentication → Users → Add user**, crie cada pessoa com **e-mail + senha**.
- (Opcional) Em **Authentication → Providers → Email**, desligue "Confirm email" para a senha valer na hora.
- No `config.js`, coloque em `ADMIN_EMAILS` os e-mails que poderão **atualizar relatórios**. Os demais entram como **líder** (só visualizam).

## 3. Configurar
- Abra `config.js` e preencha `SUPABASE_URL`, `SUPABASE_ANON_KEY` e `ADMIN_EMAILS`.

## 4. Subir no GitHub
- Coloque o conteúdo desta pasta `web/` no seu repositório (pode ser a raiz do repo).

## 5. Publicar no Vercel
1. Crie conta em https://vercel.com (entre com o GitHub).
2. **Add New → Project** → escolha seu repositório.
3. Se os arquivos estão dentro de `web/`, defina **Root Directory = web**. Framework: **Other** (é site estático).
4. **Deploy**. Pronto — você recebe um link `https://...vercel.app`.

## Uso no dia a dia
- Acesse o link → faça login.
- **Admin:** botão **"⬆ Atualizar relatórios"** → escolhe os arquivos → Enviar. Todos passam a ver atualizado.
- **Líder:** loga e visualiza os 4 dashboards (Ligações, Matrículas, Atendimentos, Cruzamento).

## ⚠️ LGPD
Os relatórios contêm CPF/telefone. O acesso fica restrito a login e o bucket é privado. Recomenda-se: usar senhas fortes, manter `ADMIN_EMAILS` enxuto e registrar internamente o tratamento desses dados.
