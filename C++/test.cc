#include <windows.h>

// Global variables
HWND g_button;

// Button click handler
LRESULT CALLBACK ButtonClickHandler(HWND hwnd, UINT msg, WPARAM wParam, LPARAM lParam)
{
    if (hwnd == g_button && msg == WM_COMMAND && HIWORD(wParam) == BN_CLICKED)
    {
        MessageBox(NULL, "Hello, World!", "Greeting", MB_OK);
    }

    return DefWindowProc(hwnd, msg, wParam, lParam);
}

// Window procedure
LRESULT CALLBACK WindowProc(HWND hwnd, UINT uMsg, WPARAM wParam, LPARAM lParam)
{
    switch (uMsg)
    {
        case WM_DESTROY:
            PostQuitMessage(0);
            return 0;

        default:
            return DefWindowProc(hwnd, uMsg, wParam, lParam);
    }
}

// Entry point
int WINAPI WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow)
{
    // Register the window class
    const char* CLASS_NAME = "MyWindowClass";

    WNDCLASS wc = {};
    wc.lpfnWndProc = WindowProc;
    wc.hInstance = hInstance;
    wc.lpszClassName = CLASS_NAME;

    RegisterClass(&wc);

    // Create the window
    HWND hwnd = CreateWindowEx(
        0,                      // Optional window styles
        CLASS_NAME,             // Window class name
        "Hello, World!",        // Window title
        WS_OVERLAPPEDWINDOW,    // Window style

        // Position and size
        CW_USEDEFAULT, CW_USEDEFAULT, 400, 300,

        NULL,       // Parent window
        NULL,       // Menu
        hInstance,  // Instance handle
        NULL        // Additional application data
    );

    if (hwnd == NULL)
    {
        return 0;
    }

    // Create the button
    g_button = CreateWindow(
        "BUTTON",               // Button class
        "Click me!",            // Button text
        WS_TABSTOP | WS_VISIBLE | WS_CHILD | BS_DEFPUSHBUTTON,  // Button styles
        10, 10, 100, 30,        // Position and size
        hwnd,                   // Parent window
        NULL,                   // Menu
        hInstance,              // Instance handle
        NULL                    // Additional application data
    );

    if (g_button == NULL)
    {
        return 0;
    }

    // Set button click handler
    SetWindowLongPtr(g_button, GWLP_WNDPROC, reinterpret_cast<LONG_PTR>(ButtonClickHandler));

    // Show the window
    ShowWindow(hwnd, nCmdShow);

    // Message loop
    MSG msg;
    while (GetMessage(&msg, NULL, 0, 0))
    {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
    }

    return 0;
}
