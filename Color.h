
/**
 * Library to manipulate font and backgroud color of the console in C applications.
 * 
 * @author:   Julio Muller
 * @version:  1.0.0
 */

/**
 * Program 'COLOR' (Windows)
 * 0 = Black
 * 1 = Blue
 * 2 = Green
 * 3 = Aqua
 * 4 = Red
 * 5 = Purple
 * 6 = Yellow
 * 7 = White
 * 8 = Gray
 * 9 = Light Blue
 * A = Light Green
 * B = Light Aqua
 * C = Light Red
 * D = Light Purple
 * E = Light Yellow
 * F = Bright White
 */

// Inclusion of required external libraries
#include <stdio.h>

// Declaration of constants
#define ANSI_RESET        "\x1b[0m"
#define ANSI_FONT_RED     "\x1b[31m"
#define ANSI_FONT_GREEN   "\x1b[32m"
#define ANSI_FONT_YELLOW  "\x1b[33m"
#define ANSI_FONT_BLUE    "\x1b[34m"
#define ANSI_FONT_MAGENTA "\x1b[35m"
#define ANSI_FONT_CYAN    "\x1b[36m"
#define ANSI_BACK_RED     "\x1b[41m"
#define ANSI_BACK_GREEN   "\x1b[42m"
#define ANSI_BACK_YELLOW  "\x1b[43m"
#define ANSI_BACK_BLUE    "\x1b[44m"
#define ANSI_BACK_MAGENTA "\x1b[45m"
#define ANSI_BACK_CYAN    "\x1b[46m"

void resetColor();

void resetColor() {
  printf(ANSI_RESET);
}
