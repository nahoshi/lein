declare global {
  namespace App {
    interface Locals {
      user: import("lucia").User | null = null;
      session: import("lucia").Session | null = null;
    }
  }
}

export { };
