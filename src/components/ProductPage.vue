<template>
    <div class="product-page">
      <!-- Header -->
      <header class="header">
        <div class="container">
          <img src="@/assets/logo.png" alt="易连 ELian VPN Logo" class="logo" />
          <h1>易连 ELian VPN</h1>
          <p>畅享高速、安全、可靠的全球网络连接</p>
          <button @click="downloadApp" class="cta-button">立即使用（使用教程）</button>
           
        </div>
      </header>
          <!-- Links Section -->
          <section class="links">
          <h2>站点导航</h2>
          <div class="link-list">
            <a href="https://elian.fun" target="_blank" class="link-button">永久官网 elian.fun</a>
            <a href="https://backup1.example.com" target="_blank" class="link-button">备用站点 :elian.net</a>
            <a href="https://backup2.example.com" target="_blank" class="link-button">备用站点 :elian2.net</a>
          </div>
          <div class="link-list" style="margin-top: 2.5rem;">
            <a href="https://elian.fun" target="_blank" class="link-button">永久官网 elian.fun</a>
            <a href="https://backup1.example.com" target="_blank" class="link-button">备用站点 :elian.net</a>
            <a href="https://backup2.example.com" target="_blank" class="link-button">备用站点 :elian2.net</a>
          </div>        </section>
      <!-- Features Section -->
      <main>
        <section class="features">
          <h2>功能亮点</h2>
          <div class="feature-list">
            <div class="feature-item">
              <span class="icon">💨</span>
              <h3>极速连接</h3>
              <p>全球高速节点，稳定流畅</p>
            </div>
            <div class="feature-item">
              <span class="icon">🔒</span>
              <h3>安全加密</h3>
              <p>保护隐私，安全无忧</p>
            </div>
            <div class="feature-item">
              <span class="icon">🌍</span>
              <h3>多平台支持</h3>
              <p>Windows、Mac、iOS、Android</p>
            </div>
            <div class="feature-item">
              <span class="icon">📡</span>
              <h3>解锁限制</h3>
              <p>访问全球网站和内容</p>
            </div>
          </div>
        </section>
  

      </main>
  
      <!-- Footer -->
      <footer class="footer">
        <p>&copy; 2024 易连 ELian VPN. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductPage",
    methods: {
      downloadApp() {
        alert("跳转到下载页面");
        // 替换为实际下载链接
        window.location.href = "https://www.example.com/download";
      },
    },
  };
  </script>
  
  <style scoped>
  /* 全局样式 */
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f9;
    color: #333;
  }
  
  /* Header 样式 */
  .header {
    background: linear-gradient(45deg, #007bff, #0056b3);
    color: white;
    text-align: center;
    padding: 40px 20px;
  }
  
  .header .logo {
    width: 80px;
    height: auto;
    margin-bottom: 10px;
  }
  
  .header h1 {
    font-size: 2.5rem;
    margin: 0;
  }
  
  .header p {
    font-size: 1.2rem;
    margin: 10px 0 20px;
  }
  
  .cta-button {
    padding: 10px 20px;
    font-size: 1.2rem;
    color: #007bff;
    background: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }
  
  .cta-button:hover {
    background: #e6e6e6;
    transform: scale(1.05);
  }
  
  /* Features 样式 */
  .features {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  .features h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .feature-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .feature-item {
    background: white;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    padding: 20px;
    flex: 1 1 calc(50% - 40px);
    max-width: calc(50% - 40px);
    box-sizing: border-box;
  }
  
  .feature-item .icon {
    font-size: 2rem;
  }
  
  .feature-item h3 {
    font-size: 1.5rem;
    margin: 10px 0;
  }
  
  .feature-item p {
    font-size: 1rem;
    color: #555;
  }
  
  /* Links 样式 */
  .links {
    padding: 20px;
    text-align: center;
    background: #f9f9f9;
  }
  
  .links h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .link-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .link-button {
    display: inline-block;
    padding: 10px 20px;
    background: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background 0.3s ease;
  }
  
  .link-button:hover {
    background: #0056b3;
  }
  
  /* Footer 样式 */
  .footer {
    background: #333;
    color: white;
    text-align: center;
    padding: 10px 0;
    margin-top: 20px;
  }
  
  .footer p {
    margin: 0;
    font-size: 0.9rem;
  }
  
  /* 响应式设计 */
  @media (max-width: 768px) {
    .header h1 {
      font-size: 2rem;
    }
  
    .header p {
      font-size: 1rem;
    }
  
    .cta-button {
      font-size: 1rem;
    }
  
    .feature-item {
      flex: 1 1 calc(100% - 20px);
      max-width: calc(100% - 20px);
    }
  
    .link-button {
      flex: 1 1 100%;
      max-width: 100%;
      text-align: center;
    }
  }
  </style>
  