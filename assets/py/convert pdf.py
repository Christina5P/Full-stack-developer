from PyPDF2 import PdfReader, PdfWriter

reader = PdfReader("input.pdf")
writer = PdfWriter()

# Lägg till alla sidor utom den första (index 0) till den nya PDF-filen
for i in range(0, len(reader.pages)):
    writer.add_page(reader.pages[i])

# Spara den nya PDF-filen
with open("output.pdf", "wb") as f:
    writer.write(f)
