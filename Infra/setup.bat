@echo off
echo.
echo ========================================
echo   DeltaX Landing — Setup
echo ========================================
echo.

cd /d "%~dp0Codebase"
if not exist package.json (
    echo ERROR: Codebase/package.json not found!
    echo Make sure you cloned the full repo.
    pause
    exit /b 1
)

echo Installing dependencies...
call npm install
if errorlevel 1 (
    echo.
    echo ERROR: npm install failed!
    echo Try these fixes:
    echo   1. Make sure Node.js is installed: node --version
    echo   2. Delete node_modules and retry: rmdir /s /q node_modules ^&^& npm install
    echo   3. Clear npm cache: npm cache clean --force
    pause
    exit /b 1
)

echo.
if not exist .env.local (
    echo Creating .env.local from template...
    copy .env.local.template .env.local >nul
    echo.
    echo IMPORTANT: Open Codebase/.env.local and fill in the API keys!
    echo   Ask Arvin for: NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
    echo   Ask Ali for:   RESEND_API_KEY
    echo.
) else (
    echo .env.local already exists — skipping.
)

echo ========================================
echo   Setup complete!
echo   To start dev server: npm run dev
echo   Or from repo root:   npm run dev
echo ========================================
echo.
pause
