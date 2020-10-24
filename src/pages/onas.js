import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Personel from '../components/personel'
import SEO from '../components/SEO'

const Onas = () => {

  const data = useStaticQuery(graphql`{
        allContentfulPersonel (sort: {fields: createdAt, order: ASC}) {
          nodes {
            nazwa
            stanowisko
            zdjecie {
              title
              fluid(maxWidth: 200, quality: 100) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
        kidsMusic: file(relativePath: { eq: "kidsMusic.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 900) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `)

  const kidsMusic = data.kidsMusic.childImageSharp.fluid

  const list = [
    {
      name: "Dziecko uczęszczające do naszego przedszkola będzie nabywało umiejętności w zakresie:",
      podpunkty: [
        "Samodzielnego wykonywania czynności samoobsługowych",
        "Zgodnego współżycia w zespole rówieśniczym",
        "Rozwijania różnorodnych zainteresowań",
        "Dostrzegania piękna różnorodnych środowisk przyrodniczych",
        "Poprawnego posługiwania się mowa",
        "Porządkowania i klasyfikowanie przedmiotów i zjawisk",
        "Posługiwanie się poznanymi symbolami i znakami",
        "Liczenia",
        "Przygotowanie do nauki czytania i pisania",
        "Dostrzegania zmian zachodzących w przyrodzie"
      ]
    },
    {
      name: "Dziecko uczęszczające do naszego przedszkola będzie mogło poznawać:",
      podpunkty: [
        "podstawowe zasady ochrony środowiska",
        "wartości uniwersalne, którymi kierują się ludzie w zyciu",
        "będzie wprowadzane w świat symboli i wartości chrześcijańskich"
      ]
    },
    {
      name: "Dziecko uczęszczające do naszego przedszkola będzie miało okazję:",
      podpunkty: [
        "obcować ze sztuką",
        "wyrażać twórczą postawę w różnych formach ekspresji dziecięcej",
        "rozwijać wrażliwość na piękno muzyki",
        "oglądać i brać udział w różnych przedstawieniach teatralnych",
        "zapoznawać się z rola techniki w życiu człowieka",
        "odczuwać potrzebę dbania o czystość osobistą",
        "rozumieć rolę ruchu na świeżym powietrzu",
        "rozwijać uczucia przywiązania i szacunku do najbliższych członków rodziny"
      ]
    }
  ];


  return (
    <Layout>
      <SEO title="Home" />
      <div className="onas">
        <div className="container">
          <h1 className="first-section">O przedszkolu</h1>
          <p>
            Przedszkole nr 8 im. Jana Pawła II do którego ma uczęszczać Państwa dziecko położone jest w centrum miasta. Wokół przedszkola znajduje się piękny ogród, gdzie dzieci często spędzają wolny czas.
            Staramy się na bieżąco odpowiadać potrzebom i wymaganiom naszych wychowanków i ich rodziców, stąd wciąż je przekształcamy i ulepszamy.

            Podstawowym zadaniem przedszkola jest wspomaganie i ukierunkowanie rozwoju dziecka zgodnie z jego wrodzonym potencjałem i możliwościami rozwojowymi dlatego:
        </p>
          <div className="flex3-1 card-wrapper">

            {list.map(wykaz => (
              <div className="card-column">
                <h5>{wykaz.name}</h5>
                <ul>
                  {wykaz.podpunkty.map(podpunkt => (
                    <li>{podpunkt}</li>
                  ))}
                </ul>
              </div>))}

          </div>

          <h1>Personel przedszkola</h1>
          <div className="flex4-2-1 personel-wrapper">

            {data.allContentfulPersonel.nodes.map((node) => {
              return (

                <Personel
                  nazwa={node.nazwa}
                  stanowisko={node.stanowisko}
                  zdj={node.zdjecie.fluid}
                  alt={node.zdjecie.title}
                  key={node.zdjecie.fluid.src}
                />

              )
            })}

          </div>

          <h1>Zdjęcia przedszkola</h1>

        </div>
        <div className="section-color">
          <div className="container">
            <h1>Historia przedszkola</h1>
            <p>Początki przedszkola sięgają końca XIX wieku. Jak podają dokumenty archiwum, po wybudowaniu kilku zakładów, jeden z budynków w 1899r. przeznaczono na ochronkę do której uczęszczały dzieci z miasta oraz miejscowego sierocińca ”. W 1900r. do ochronki uczęszczało 75 dzieci, a w 1912r. liczba dzieci dochodziła do 100. Wzrastająca liczba dzieci uczęszczających do ochronki świadczyła o ogromnym zapotrzebowaniu miejscowej ludności oraz o wysokim poziomie nauczania i wychowania.
            </p>
            <p>Większość dzieci pochodziła z rodzin robotniczych a niewielki procent z rodzin urzędników. W 1931r. ochronkę imienia Dzieciątka Jezus przeniesiono z budynku klasztornego do budynku parterowego zakupionego od Gawłowej przy ul. Zatorskiej (dzisiaj ul. Dąbrowskiego 14), przylegającego do posiadłości klasztornej.
            </p>
            <p>
              Od początku do ochronki uczęszczały dzieci w wieku od 3- 6 lat. W 1921r. na żądanie władz z Ministerstwa Oświaty w Krakowie powstaje regulamin ochronki. Władzom oświatowym zdawano sprawozdanie z działalności instytucji.
            </p>
            <p>
              Stan dzieci w liczbie 100 utrzymywał się do wybuchu II wojny światowej. Podczas okupacji ochronka była nieczynna. Otwarta została po zakończeniu wojny w 1945r. i poddana zrzeszeniu „Caritas”. Pozostała ona w rękach Zgromadzenia do 28 czerwca 1962r. W tym dniu budynek wraz z urządzeniem przejęły władze państwowe. W dalszym ciągu funkcjonowało przedszkole nr 8 prowadzone przez personel świecki.
            </p>
            <p>
              W 1990r. staraniem władz zakonnych budynek przedszkolny zwrócono Zgromadzeniu. Po znacznych remontach we wrześniu 1990r. zaczęło funkcjonować jako przedszkole nr 8 Sióstr Serafitek. Przedszkole posiada trzy oddziały, do których uczęszcza łącznie 90 dzieci. Cieszy się ogromnym zaufaniem miejscowej ludności.Przedszkole posiada duże pomieszczenia do zajęć dla dzieci, salę gimnastyczną oraz duże ogródki przedszkolne, oddzielne dla dzieci młodszych i starszych.W ramach zajęć dodatkowych dla dzieci chętnych prowadzone są zajęcia z rytmiki, języka angielskiego oraz zajęcia logopedyczne. W 2004 roku przedszkole obrało sobie za patrona Jana Pawła II. W 2011 roku staraniem organu prowadzącego personelu i rodziców został poświęcony sztandar.
           </p>
          </div>
        </div>

        <div className="container">
          <h1>Hymn przedszkola</h1>
          <div className="flex-center">
            <p>
              Na niebie firanki, na ziemi baranki, baranki młode
          <br />Wesoło brykają, figlują, śpiewają, baranki młode
          <br />W serafitkowym ogrodzie
          <br />W serafitkowym przedszkolu
          <br />
              <br />REF. Ojcze, Ojcze, paś owieczki swoje, paś baranki
          <br />Ojcze, Ojcze, obdarz nas pokojem
          <br />
              <br />Ogrody miłości, owoce świętości, baranki młode
          <br />Do nieba wzdychają, papieża kochają, baranki młode
          <br />Jan Paweł nam błogosławi, kocha i czuwa nad nami
          <br />
              <br />REF. Ojcze, Ojcze, paś owieczki swoje, paś baranki
          <br />Ojcze, Ojcze, obdarz nas pokojem
          <br />
            </p>
          </div>

          <Img fluid={kidsMusic}
            className="footer-image"
            objectFit="cover"
            alt="kids playing the music" />
        </div>

      </div>
    </Layout>
  )
}

export default Onas