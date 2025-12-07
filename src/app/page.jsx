"use client"
import "antd/dist/reset.css";
import { Layout, Avatar, Divider, Card, Spin } from "antd"
import Link from "next/link"
import gsap from "gsap"
import Lenis from "lenis";
import React, { useEffect, useState } from "react"
import { InstagramOutlined, GithubOutlined, TikTokOutlined, MailOutlined, PhoneOutlined, AimOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import "../app/styles/global.css"

const { Content, Header, Footer } = Layout

export default function Home() {
  const [text, setText] = useState("")
  const [Loading, setLoading] = useState(true)
  const fullText = "Hi, I'm Abhirath"


  useEffect(() => {

    if (Loading) return;
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(".gambarprof", { y: -150, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" })
    gsap.fromTo(".Desc", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2, delay: 0.4, ease: "power3.out" })
    gsap.fromTo(".Role", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, delay: 0.8, ease: "power3.out" })
    gsap.fromTo(".textportoo", { y: 100, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.5, scrollTrigger: {
        trigger: ".textportoo",
      }
    })

    gsap.fromTo(".divPorto .PortoGambar", { y: 150, opacity: 0 }, {
      y: 0, opacity: 1, stagger: {
        grid: "auto",
        amount: 1
      }, scrollTrigger: {
        trigger: ".divPorto .PortoGambar"
      }
    })


    gsap.fromTo(".TextContact", { y: 100, opacity: 0 }, {
      y: 0, opacity: 1, direction: 1.5, scrollTrigger: {
        trigger: ".TextContact"
      }
    })

    gsap.fromTo(".ContactForm", { y: -100, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.5, scrollTrigger: {
        trigger: ".ContactForm"
      }
    })


    gsap.fromTo(".Footerr", { y: -100, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1.3, scrollTrigger: {
        trigger: ".Footerr",

      }
    })






  }, [Loading])



  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)


    
  },[])









  useEffect(() => {
    const lenis = new Lenis({ smooth: true })
  
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
  
    requestAnimationFrame(raf)
  
    lenis.on("scroll", ScrollTrigger.update)
  
    return () => {
      lenis.destroy()
    }
  }, [])


  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) clearInterval(timer)
    }, 120)
    return () => clearInterval(timer)
  }, [])




  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    }

    try {
      const response = await fetch("https://formspree.io/f/mwprabkl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert("Pesan berhasil dikirim! 🎉")
        e.target.reset()
      } else {
        alert("Terjadi kesalahan, coba lagi nanti.")
      }
    } catch (error) {
      console.error(error)
      alert("Terjadi error saat mengirim pesan.")
    }
  }




  if (Loading) {
    return (
      <div style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        position: "fixed",
        inset: 0,
        zIndex: 99
      }}>
        <Spin size="large" />
      </div>
    )
  }


  return (
    <>

      <Header className="Headerr">
        <div className="divHeader">
          <p className="TextHeader">Abhirath</p>
          <div className="divLink">
            <p className="textHeader1" onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>Home</p>
            <p className="textHeader1" onClick={() => document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" })}>Portofolio</p>
            <p className="textHeader1" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Contact</p>
          </div>
        </div>
      </Header>

      <Layout className="MainLayout">


          <Layout>
            <Content className="Contentt relative overflow-hidden">
              <div>
                {/* === BACKGROUND ANIMATION === */}
                <div className="animated-bg"></div>
                <div className="neon-particles">
                  {[...Array(105)].map((_, i) => (
                    <span key={i} className="particle"></span>
                  ))}
                </div>

                <div id="home" className="AllDivHome relative z-10">
                  <div className="text-section">
                    {/* Efek Mengetik */}
                    <p className="Name">
                      <span className="typed-text">{text}</span>
                      <span className="cursor"></span>
                    </p>

                    <b className="Role">Front End Developer</b>

                    <p className="Desc">
                      Terampil menggunakan HTML, CSS, dan JavaScript, serta memiliki
                      keinginan kuat untuk terus belajar teknologi baru.<br />
                      Berorientasi pada detail, disiplin, dan siap berkontribusi
                      sebagai <span className="highlight">Junior Web Developer.</span>
                    </p>
                  </div>

                  <div className="image-section">
                    <Avatar
                      size={300}
                      shape="circle"
                      src="/gambar.jpeg"
                      className="gambarprof"
                    />
                  </div>
                </div>

                <Divider />




                <div style={{ marginTop: "220px" }}>
                  <div id="portfolio" className="Portotext">
                    <p className="textportoo">Portofolio</p>
                  </div>
                  <div>
                    <div className="divPorto">
                      <Card className="PortoGambar">
                        <Avatar

                          shape="square"
                          src="/porto1.png"

                          className="AvatarPic"
                        />
                        <Divider />

                        <p className="TextCompanny">Companny Profile</p>
                        <p className="SilverText">SILVER SPURS</p>
                        <p className="TextCardAva">Showcasing modern architecture through immersive<br />
                          experiences </p>
                        <div className="AllTextLinkPro">

                          <Link className="LinkView" target="_" href="https://compannyprof.vercel.app"> View Project <ArrowRightOutlined /></Link>
                        </div>
                      </Card>

                      <Card className="PortoGambar">
                        <Avatar

                          shape="square"
                          src="/porto2.png"
                          className="AvatarPic"
                        />
                        <Divider />
                        <p className="TextCompanny">E-Commerce</p>
                        <p className="SilverText">FASHION</p>
                        <p className="TextCardAva">A revolutionary shopping experience <br />
                        with great design</p>
                        <div className="AllTextLinkPro">

                          <Link className="LinkView" target="_" href="https://new-portofolio-less.vercel.app/"> View Project <ArrowRightOutlined /></Link>
                        </div>
                      </Card>


                    </div>


                    <div className="divPorto">

                      <div>
                        <Card className="PortoGambar">
                          <Avatar

                            shape="square"
                            src="/porto3.png"
                            className="AvatarPic"
                          />
                          <Divider />
                          <p className="TextCompanny">Design Phone</p>
                          <p className="SilverText">Creative Design</p>
                          <p className="TextCardAva">Bold branding and dynamic web presence for a creative design</p>
                          <div className="AllTextLinkPro">

                            <Link className="LinkView" style={{ color: "#00ffff" }} target="_" href="https://quiz-client-iota.vercel.app"> View Project <ArrowRightOutlined /></Link>
                          </div>
                        </Card>
                      </div>
                      <div>
                        <Card className="PortoGambar">
                          <Avatar

                            shape="square"
                            src="/porto4.png"
                            className="AvatarPic"
                          />
                          <Divider />
                          <p className="TextCompanny">Project E-Commerce</p>
                          <p className="SilverText">Sora & Co.</p>
                          <p className="TextCardAva">A revolutionary shopping experience <br />
                            with client</p>
                          <div className="AllTextLinkPro">
                            <Link className="LinkView" style={{ color: "#00ffff" }} target="_" href="https://fashion-e-commerce-sfaz.vercel.app/"> View Project <ArrowRightOutlined /></Link>
                          </div>
                        </Card>
                      </div>

                    </div>
                  </div>




                  <div>
                    <div className="TextContact">
                      <p>Contact</p>
                    </div>

                    <div>
                      <p className="SmallTextcontact">Let's work together on next project</p>
                    </div>

                  </div>

                  <div id="contact" className="ContactForm">
                    <div>


                      <p style={{ fontWeight: "700" }}>GET IN TOUCH</p>

                      <div className="LongTextCon">
                        <p>Have a project in mind? Feel free to reach out. I'm always open to<br />
                          discussing new projects, creative ideas, or opportunities to be part of<br />
                          your vision.</p>
                      </div>


                      <div className="AlldivContactText">
                        <div className="DivLogosText">

                          <div>

                            <MailOutlined className="ThelogosE" />

                          </div>


                          <div>
                            <p className="TextInL">Email</p>
                            <p>abhirath1906@gmail.com</p>
                          </div>



                        </div>

                        <div className="DivLogosText">

                          <div>

                            <PhoneOutlined className="ThelogosE" />

                          </div>


                          <div>
                            <p className="TextInL">Phone</p>
                            <p>+62 821 2293 5778</p>
                          </div>



                        </div>

                        <div className="DivLogosText">

                          <div>

                            <AimOutlined className="ThelogosE" />

                          </div>


                          <div>
                            <p className="TextInL">Location</p>
                            <p>Indonesia, Jakarta</p>
                          </div>



                        </div>


                      </div>

                    </div>


                    <form onSubmit={handleSubmit} className="FormContainer">
                      <input
                        type="text"
                        name="name"
                        placeholder="Username"
                        required
                        className="FormInput"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        className="FormInput"
                      />
                      <textarea
                        name="message"
                        placeholder="Message"
                        required
                        className="FormTextarea"
                      />
                      <button type="submit" className="FormButton">Send</button>
                    </form>
                  </div>



                </div>
              </div>


            </Content>


            <Footer className="Footerr">
              <div className="AllDivFooter">
                <div className="AllDivFirstFoo">
                  <div className="Footer1TT">
                    <p>ABHIRATH</p>
                  </div>

                  <div >

                    <p className="TextFooter">Creating digital experiences that<br />
                      inspire and engage. Let's build<br />
                      something amazing together.</p>

                  </div>

                  <div className="MailFooter">
                    <div>
                      <MailOutlined className="ThelogosE" />
                    </div>
                    <div>
                      <p style={{ color: "white", opacity: 0.5 }}>abhirath1906@gmail.com</p>
                    </div>
                  </div>

                </div>


                <div className="AlldivLinksText">
                  <div className="TextLinks">
                    <p>Quick Links</p>
                  </div>
                  <div className="AlldivLinksFooter">

                    <p className="AllLinksFooter" onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>Home</p>
                    <p className="AllLinksFooter" onClick={() => document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" })}>Portofolio</p>
                    <p className="AllLinksFooter" onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}>Contact</p>

                  </div>
                </div>



                <div className="AlldivLinksText">
                  <div className="TextLinks">
                    <p>Skills</p>
                  </div>

                  <div className="AlldivLinksFooter">
                    <p className="AllLinksFooter">Front-End Daveloper</p>
                    <p className="AllLinksFooter">UI/UX Design</p>
                    <p className="AllLinksFooter">Editing Video</p>
                  </div>

                </div>

                <div className="allDivConnect">
                  <div className="TextLinks">
                    <p>Connect</p>
                  </div>
                  <div className="LastTextFooter">
                    <p>Follow me on social media for updates<br />
                      and behind-the-scenes content.</p>
                  </div>

                  <div className="AllDivLinksFoo">
                    <a href="https://www.instagram.com" target="_">
                      <InstagramOutlined className="LinkSocial" />
                    </a>

                    <a href="https://github.com/settings/profile" target="_">
                      <GithubOutlined className="LinkSocial" />
                    </a>

                    <a href="https://www.tiktok.com/id-ID/" target="_">
                      <TikTokOutlined className="LinkSocial" />
                    </a>



                  </div>

                  <div className="Avaible">
                    <p>Available for projects</p>
                  </div>
                </div>

              </div>


              <Footer className="Footerr2">
                <div className="DivLastFooter">
                  <p>© 2025 Abhirath. All rights reserved.</p>

                  <p>Made With Next.js</p>
                </div>

              </Footer>
            </Footer>
          </Layout >
      </Layout >
  
    </>
  )
}
