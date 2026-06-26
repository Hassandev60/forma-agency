-- Run this in your PostgreSQL database to set up the contacts table

CREATE TABLE IF NOT EXISTS contacts (
  id         SERIAL PRIMARY KEY,
  name       VARCHAR(100)  NOT NULL,
  email      VARCHAR(150)  NOT NULL,
  company    VARCHAR(100),
  service    VARCHAR(100),
  message    TEXT          NOT NULL,
  created_at TIMESTAMP     DEFAULT NOW()
);

-- Optional: index for faster queries by email
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);

-- Optional: view recent submissions
-- SELECT * FROM contacts ORDER BY created_at DESC LIMIT 20;