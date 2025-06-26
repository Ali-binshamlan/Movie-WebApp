type LoginFormData = {
  email: string;
  password: string;
};

// محاكاة تسجيل دخول وهمي
export async function loginUser(data: LoginFormData): Promise<{ token: string }> {
  // هنا ممكن تتحقق من الإيميل والباسورد إذا حبيت
  if (data.email === "test@example.com" && data.password === "123456") {
    // نعطي توكن وهمي
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ token: "mock-token-123" });
      }, 500); // نحاكي تأخير بسيط
    });
  } else {
    return Promise.reject(new Error("Invalid credentials"));
  }
}
