# Resume Setup Instructions

## How to Add Your Resume

Your portfolio is now modernized with a **resume download button**! To make it work, you need to add your resume file to the `public/` folder.

### Steps:

1. **Prepare Your Resume**
   - Convert your resume to PDF format
   - Name it: `resume.pdf`

2. **Place the File**
   - Add the resume.pdf file to the `public/` folder
   - Path: `c:\nandhakumar-portfolio\public\resume.pdf`

3. **File Structure**
   ```
   public/
   ├── index.html
   ├── manifest.json
   ├── robots.txt
   ├── favicon.ico
   └── resume.pdf    ← Add your resume here
   ```

### What's New in Your Portfolio:

✅ **Resume Download Button in Navbar** - Quick access from any section
✅ **Resume Download Button in Hero Section** - Prominent CTA in your profile
✅ **Modern Styling** - Gradient effect matching your portfolio theme
✅ **Enhanced Profile** - Added emoji icons to contact info for better visual appeal
✅ **Responsive Design** - Works perfectly on all devices

### Testing:

1. Run: `npm start`
2. Click the "📄 Resume" button in the navbar
3. Or click "📥 Download Resume" button in the hero section
4. Your resume should download as `Nandhakumar_D_Resume.pdf`

### Building for Production:

```bash
npm run build
npm run deploy
```

---

**Need to use a different resume name?** 
Edit `Navbar.js` and `Home.js` and change `/resume.pdf` to your file name (e.g., `/cv.pdf`)

**Want a different download name?**
Edit the `download` attribute in both files (currently: `'Nandhakumar_D_Resume.pdf'`)
