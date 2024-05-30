import image1 from "/diagram.png";
import image2 from "/Pie chart.png";
import image3 from "/Platform IMG.png";
import image4 from "/SecondDaigram.png";
import image5 from "/Icon.png";
import Navbar from "../Components/Navbar";
import TableComponent from "../Components/Tableone";

const Finuxwhitepaper = () => {  
  return (
    <>
      <Navbar />
      {/* <!-- tab of content starts --> */}
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-3 Tab_content bg-white dark:!bg-gray-900 max-h-screen sticky top-0 rounded-lg overflow-y-auto">
            <ul className="nav flex-column text-gray-500">
              <li className="nav-item">
                <h3 className="text-2xl font-semibold text-black mt-3 dark:!text-white">
                  Finux Whitepaper
                </h3>
              </li>
              <li className="nav-item">
                <p>Table of Contents</p>
                <hr />
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link text-gray-500"
                  aria-current="page"
                  href="#section-0-0"
                >
                  0 - 0. Problem Statement
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-gray-500" href="#section-0-1">
                  0 - 1. Introduction – Finulab
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-gray-500" href="#section-0-2">
                  0 - 2. Introduction – Finux
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-gray-500" href="#section-1-1">
                  1 - 1. Finux – Tokenomics & Purpose
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-gray-500" href="#section-1-2">
                  1 - 2. Finux – Contract Configuration
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-gray-500" href="#section-1-3">
                  1 - 3. Finux – Contract’s Request Keys
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-gray-500" href="#section-2-1">
                  2 - 1: Motivation for finulab – Intermission Part 1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-gray-500" href="#section-2-2">
                  2 - 2: Motivation for finulab – Intermission Part 2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-gray-500" href="#section-3-1">
                  3 - 1: Finulab – Quantitative Objective
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-gray-500" href="#section-3-2">
                  3 - 2: finulab – Minimum Sample Size Required to Approximate
                  Average Price Target
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-gray-500" href="#section-3-3">
                  3 - 3: finulab – Minimum Sample Size Required to Approximate
                  Recommendations Distribution
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-gray-500" href="#section-3-4">
                  3 - 4: finulab – Qualitative Objective
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-gray-500" href="#section-3-5">
                  3 - 5: finulab – Reward Protocol{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-gray-500" href="#section-4-1">
                  4 - 1: Conclusion
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#section-References">
                  <h4>References</h4>
                </a>
              </li>
            </ul>
          </div>
          

          {/* <!-- tab of contents ends --> */}
          <div className="col-sm-12 col-md-9 Table_Content">
            {/* <!-- header starts --> */}
            <div className="row header-wrapper">
              <div className="col-md-8">
                <h2 className="mx-5 mb-5 text-3xl text-black font-semibold leading-relaxed dark:!text-white">
                  Finux: a market sentiment <br /> data exchange utility token
                </h2>
              </div>
              <div className="col-md-4">
                <ul className="nav Table-Nav flex-column">
                  <li className="nav-item">
                    <h4 className=" text-xl text-black font-semibold ms-3 dark:!text-white">
                      Obsaol Tesemma
                    </h4>
                    <hr />
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-gray-500" href="#">
                      obsaol.tesemma@fin-us.com
                    </a>
                    <hr />
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-gray-500" href="#">
                      finulab.com|finux.xyz
                    </a>
                  </li>
                </ul>
                <hr />
              </div>
            </div>
            <hr />
            {/* <!-- header ends --> */}

            {/* <!-- Section-0-0 starts --> */}
            <div id="section-0-0" className="mt-5 ms-5">
              <h2 className="text-3xl text-black font-semibold dark:!text-white">
                0 - 0. Problem Statement{" "}
              </h2>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                In the stock and cryptocurrency markets, how can we monitor and
                track market participants’ outlooks and utilize those
                perspectives to determine price targets and action
                recommendations?
              </p>
            </div>
            {/* <!-- Section-0-0 ends --> */}

            {/* <!-- Section-0-1 starts --> */}
            <div id="section-0-1" className="my-5 ms-5 ">
              <h2 className="text-3xl text-black font-semibold dark:!text-white">
                0 - 1. Introduction – Finulab: an anonymous, personalized
                financial social media and terminal.
              </h2>
              <p className="mt-3 text-gray-500 text-justify leading-relaxed">
                In the stock and cryptocurrency markets, how can we monitor and
                track market participants’ outlooks and utilize those
                perspectives to determine price targets and action
                recommendations?
              </p>
              <div className="row">
                <div className=" col-sm-12 col-md-6">
                  <p className=" mt-3 text-gray-500 text-justify leading-relaxed">
                    In the development of Finulab, the main objective was to
                    create a platform which welcomes market participants to
                    exercise their right to the freedom of speech by expressing
                    different perspectives, as well as their countering
                    criticisms. Generally, we cannot and must not take
                    information at face value on the basis of trust. This is
                    especially the case in our financial markets; given that, if
                    the information is discovered to be incorrect, not only do
                    we have to overcome the embarrassment of having abided by
                    it, but also, in some cases, financial loss. Rather than
                    accepting information on the basis of trust; it is
                    imperative to subject that information to a critical review
                    process. Through that process, fair criticisms can arise
                    which can then mold the given information into either the
                    accepted truth or debunked, fake narrative. We believe that
                    these discussions are not only informative and supportive in
                    the performance of due diligence, but also a means of
                    identifying the truth in perhaps the most chaotic sphere of
                    life: business.{" "}
                  </p>
                </div>
                <div className="col-sm-12 col-md-6">
                  <img
                    src={image3}
                    alt="platfrom-images"
                    className="img-fluid"
                  />
                </div>
              </div>
              <p className="text-gray-500 text-justify mt-3 leading-relaxed">
                As a financial terminal, Finulab’s objective is to ensure every
                glance offers insights which support investors’ journey towards
                financial freedom. To these ends, Finulab also provides easy
                means of engaging with financial data through providing
                recommendations (buy, hold, or sell) and price targets. We
                firmly believe in the motto: “united we succeed”. Even though an
                individual recommendation or price target may be wrong, the
                collective recommendations and price targets of the market
                offers actionable insights. We believe market participant’s
                engagement on Finulab through citizen journalism and market
                analysis is a tremendous public service; as such, we believe
                that a nod of appreciation is not a sufficient means of
                demonstrating our gratitude for Finulab’s users. Mere words of
                thanks, although kind, cannot tangibly benefit users’ lives.
                Hence, we have augmented Finulab with a reward protocol through
                Finux.{" "}
              </p>
            </div>
            {/* <!-- Section-0-1 ends --> */}
            {/* <!-- Section-0-2 starts --> */}
            <div id="section-0-2" className="my-5 ms-5">
              <h2 className="text-3xl text-black font-semibold dark:!text-white">
                0 - 2. Introduction – Finux: a market sentiment data exchange
                utility token{" "}
              </h2>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                The Finux is a token contract is built and deployed on Kadena’s
                blockchain, across all 20 chains (chain 0 through 19). We
                primarily selected to deploy on Kadena’s infrastructure due to:
              </p>
              <ol className="fw-bold mt-3 text-justify dark:!text-white">
                <li>1. the minimal gas fees associated with transactions,</li>
                <li>
                  {" "}
                  2. and the pact smart contract language, which allows us to
                  upgrade the contract’s logic to better adapt to users’ future
                  needs by offering more functionalities.
                </li>
              </ol>
              <p className="text-justify text-gray-500 mt-3 leading-relaxed">
                Finux is designed to be a market sentiment data exchange utility
                token. Finulab users are rewarded in Finux for engaging on the
                platform through citizen journalism and market analysis; these
                activities provide Finulab data around market participants’
                future outlooks{" "}
                <span className="text-info fw-bold">(section 2 & 3).</span> This
                data will be aggregated and made available to the general public
                on Finulab’s user interface (UI), free of charge. Further, on
                November 10, 2024, Finulab will release API and WebSocket
                services to provide real-time sentiment data for both stocks and
                cryptocurrencies. Finulab will ensure that there is a free-tier
                access to the data for low volume API requests. However, high
                volume requests, which place great loads on our systems, will
                require payment through Finux. Finux will be the only acceptable
                currency to obtain any and all market sentiment data generated
                on Finulab. Hence, at the moment, the token’s main utility is to
                serve as: the method of payment for high volume access to
                Finulab’s market sentiment API and WebSocket services.
              </p>
              <div className="box Box_theme py-3 Sec_custom l dark:bg-gray-900 rounded-lg">
                <p className="text-warning p-3">
                  Note on White Paper’s Status & Finux’s Utility:
                </p>
                <p className="text-justify text-gray-500 mt-1 leading-relaxed px-3 ">
                  at Finulab, we are committed to developing the future of
                  finance through careful consideration of market participants’
                  needs. As such, this white paper’s status is and will continue
                  to always be: “work in progress”. As we continue to expand our
                  suite of applications, products, and services, the utilities
                  offered by the Finux token will only continue to grow. Hence,
                  in accordance with our growth, this white paper will be
                  updated to appropriately to reflect our cutting-edge
                  developments and the additional utilities of Finux.{" "}
                </p>
              </div>
            </div>
            {/* <!-- Section-0-2 ends --> */}
            {/* <!-- Section-1-1 starts --> */}
            <div id="section-1-1" className="my-5 ms-5">
              <h2 className="text-3xl text-black font-semibold dark:!text-white">
                1 - 1. Finux – Tokenomics & Purpose: by the people, for the
                people
              </h2>
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <p className="text-justify text-gray-500 mt-3 leading-relaxed">
                    Finux has a capped, maximum supply of 150 million tokens;
                    further, 100% of the supply is entirely committed to the
                    users of Finulab—all 150 million tokens will be utilized to
                    reward Finulab’s users for their engagement on the platform
                    through citizen journalism and market analysis.{" "}
                  </p>
                  <p className="text-justify text-gray-500 mt-3 leading-relaxed">
                    As mentioned in{" "}
                    <span className="text-info fw-bold">
                      section 0 – 1 & 2,
                    </span>{" "}
                    in the development of Finulab, our main objective is to
                    support market participants in sharing their perspectives,
                    future outlooks, and price movement expectations—for more
                    details on the utilization of these data points, see section
                    3. As a result, we view Finulab as a platform which open
                    sources financial news and analysis from market
                    participants; further, we understand that the value of
                    Finulab as a financial research platform is contingent on
                    users’ contributions. Hence, to incentive quality
                    contributions and encourage citizen journalism, Finulab is
                    committing 100% of Finux’s supply to rewarding the users of
                    the platform. As a byproduct of these rewards, users obtain
                    the following privileges.{" "}
                  </p>
                </div>
                <div className="col-sm-12 col-md-6">
                  <img src={image2} alt="Pie-Chart" className="img-fluid" />
                </div>
              </div>
              <ol className="fw-semibold mt-3 list_Font dark:!text-white">
                <li>
                  {" "}
                  1. They have the ability to sell their rewards on centralized
                  or decentralized exchanges to other individuals or companies
                  that require the token for high volume access to Finulab’s
                  market sentiment data services.
                </li>
                <li>
                  {" "}
                  2. If users require high volume access to financial sentiment
                  data, they can instead choose to use their rewards as a form
                  of payment to access Finulab’s services
                </li>
              </ol>
              <div className="box Box_theme py-3 bg-white px-3 Sec_custom rounded-lg mt-3 dark:!bg-gray-900">
                <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                  Note: as Finux tokens can only be earned through engagement
                  with Finulab, the distribution of the token to the public is
                  not possible to predict at the moment. Distribution forecasts
                  will change on a real-time based on engagement rates. However,
                  note that the maximum circulating supply of the token will be
                  150M. When we obtain the initial data from users’ engagement,
                  we will come back to update this whitepaper with our Finux
                  distribution forecasts.{" "}
                </p>
              </div>
            </div>
            {/* <!-- Section-1-1 ends --> */}
            {/* <!-- Section-1-2 starts --> */}
            <div id="section-1-2" className="my-5 ms-5">
              <h2 className="text-3xl text-black font-semibold dark:!text-white">
                1 - 2. Finux – Contract Configuration: a safe and secure
                multi-chain design{" "}
              </h2>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                The safety and security of all users was our main priority in
                the development of Finux. As such, the Finux token contract only
                supports ‘k:’ accounts, which are intended to have a single-key
                account protocol. Consider the following keypair:
              </p>
              <div className="box Table_Icon Box_theme  py-2 Single_Tb bg-white Sec_custom rounded-3xl mt-3 dark:!bg-gray-900">
                <table className="ms-3">
                  <tr>
                    <td>
                      <a className="font-semibold dark:!text-white">
                        Public: fff65dc3b24414f4d b99e7f9b3fd3313010f1aa85
                        8acf5e72bb368ba68bc1cad
                      </a>
                    </td>
                    <td className="copy-icon ">
                      <i
                        className="bi bi-clipboard text-success"
                        id="clipboard-icon"
                      ></i>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="box Table_Icon Box_theme py-2 Single_Tb bg-white Sec_custom rounded-3xl mt-3 dark:!bg-gray-900">
                <table className="ms-3">
                  <tr>
                    <td>
                      <a className="font-semibold dark:!text-white">
                        Secret: 819522d0a44342ab8 c5bd7d4757306518cd7d63a
                        730e33b03e9a9049b765b
                      </a>
                    </td>
                    <td className="copy-icon ">
                      <i
                        className="bi bi-clipboard text-success"
                        id="clipboard-icon"
                      ></i>
                    </td>
                  </tr>
                </table>
              </div>
              <p className="mt-3 text-gray-500  text-justify leading-relaxed">
                If a user wants to create a Finux account, the token contract
                ensures and enforces that the account’s wallet address is the
                below across all chains:{" "}
              </p>
              <div className="box Table_Icon Box_theme py-2 Single_Tb bg-white Sec_custom rounded-3xl mt-3 dark:!bg-gray-900">
                <table className="ms-3">
                  <tr>
                    <td>
                      <a className="font-semibold dark:!text-white">
                        k: fff65dc3b24414f4db99e 7f9b3fd3313010f1aa858a
                        cf5e72bb368ba68bc1cad{" "}
                      </a>
                    </td>
                    <td className="copy-icon ps-4">
                      <i
                        className="bi bi-clipboard text-success"
                        id="clipboard-icon"
                      ></i>
                    </td>
                  </tr>
                </table>
              </div>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                By doing so, the single-key protocol is enforced across all the
                chains. For this account to commit any transactions or calls to
                the functions in the Finux token contract, the key pair
                specified above is the guard that must be validated, and no
                other key-pairs work. Therefore, another keypair controlling
                different chains of an already created user account (i.e.,
                squatting) is not a possibility. This ensures that a user has
                absolute custody of their account and wallet across all chains.{" "}
              </p>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                For a summary of all the possible transactions that can occur in
                the Finux ecosystem, in accordance with the design and
                limitations of the token contract, please refer to FIG. 2 below.
              </p>
              <img src={image1} alt="diagram" className="img-fluid mt-3" />
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                <span className="text-dark fw-bold dark:!text-white">
                  FIG. 2.
                </span>{" "}
                – Displayed above are all the possible transactions that can
                take place in the Finux ecosystem. The eco system has a root
                account (i.e., finulab-bank), which holds the initial & maximum
                supply of 150M tokens. This account then rewards the users of
                Finulab, which will be provided single-key protocol accounts
                (i.e. ‘k:’ accounts). Thereafter, users can transfer the token
                between one another or sell them across centralized or
                decentralized exchanges. Further, if users require high volume
                access to Finulab’s API and WebSocket services, they can make a
                payment to the root account (i.e. finulab-bank) to obtain those
                services.{" "}
              </p>
            </div>
            {/* <!-- Section-1-2 ends --> */}
            {/* <!-- Section-1-3 starts --> */}
            <div id="section-1-3" className="my-5 ms-5">
              <h2 className="text-3xl text-black font-semibold dark:!text-white">
                1 - 3. Finux – Contract’s Request Keys: open development,
                security through transparency{" "}
              </h2>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                We fundamentally believe in developing in the open. Hence, to
                audit and validate that the token’s contract operates as
                specified above, please feel free to visit the links specified
                below for source code and the request keys affiliated with the
                contract’s deployment.
              </p>
              <div className="bg-white py-4 rounded-3xl  dark:!bg-gray-900 ">
                <h5 className="text-warning ps-3 font-semibold">
                  Finux Token Contract – Request Keys for Mainnet Deployment
                </h5>
                <TableComponent />
              </div>
              <p className="text-justify text-gray-500 mt-3">
                <span className="text-dark fw-bold dark:!text-white">
                  FIG. 3.
                </span>{" "}
                – Displayed above are the links to Finux’s deployment onto the
                Kadena blockchain. These links include the Finux token smart
                contract.{" "}
              </p>
            </div>
            {/* <!-- Section-1-3 ends --> */}
            {/* <!-- Section-2-1 starts --> */}
            <div id="section-2-1" className="my-5 ms-5">
              <h2 className="text-3xl text-black font-semibold dark:!text-white">
                2 - 1: Motivation for Finulab – Intermission Part 1{" "}
              </h2>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                Due to the popularity of the analysts’ recommendations system,
                it is a factor in many market participants’ due diligence and
                market research process—as an example of the system, we have
                included the table below.
              </p>
              <div className="table-responsive py-4">
                <table className=" rounded-table rounded-3xl text-center w-full bg-white dark:!bg-gray-900  mt-3 text-black dark:!text-white p-3 ">
                  <thead>
                    <tr className="border-b">
                      <td scope="row" colSpan="2" className="text-warning p-3 border-r">
                        as of Mar 22, 2023
                      </td>
                      <td className="text-warning border-r" colSpan="3">
                        Recommendations
                      </td>
                      <td className="text-warning" colSpan="3">
                        Price Targets
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <th className="p-3 border-r" scope="col">
                        Stocks
                      </th>
                      <th scope="col" className="border-r">Polled</th>
                      <th scope="col" className="border-r">Buys</th>
                      <th scope="col" className="border-r">Holds</th>
                      <th scope="col" className="border-r">Sells</th>
                      <th scope="col" className="border-r">Low</th>
                      <th scope="col" className="border-r">Medium</th>
                      <th scope="col" >High</th>
                    </tr>
                    <tr className="border-b">
                      <td scope="row" className="p-3 border-r">
                        AAPL[1]
                      </td>
                      <td className="border-r">39</td>
                      <td className="border-r">30</td>
                      <td className="border-r">7 </td>
                      <td className="border-r">2</td>
                      <td className="border-r">$116.00 </td>
                      <td className="border-r">$173.00</td>
                      <td >$199.00 </td>
                    </tr>
                    <tr className="border-b">
                      <td scope="row" className="p-3 border-r">
                        MSFT[2]
                      </td>
                      <td className="border-r">49</td>
                      <td className="border-r">41</td>
                      <td className="border-r">7</td>
                      <td className="border-r">1</td>
                      <td className="border-r">$212.00 </td>
                      <td className="border-r">$285.00</td>
                      <td>$325.00 </td>
                    </tr>
                    <tr className="border-b">
                      <td scope="row" className="p-3 border-r">
                        GOOG[3]
                      </td>
                      <td className="border-r">49</td>
                      <td className="border-r">44</td>
                      <td className="border-r">5</td>
                      <td className="border-r">0</td>
                      <td className="border-r">$89.88 </td>
                      <td className="border-r">$125.00</td>
                      <td>$160.00 </td>
                    </tr>
                    <tr className="border-b">
                      <td scope="row" className="p-3 border-r">
                        AMZN[4]
                      </td>
                      <td className="border-r">53 </td>
                      <td className="border-r">48</td>
                      <td className="border-r">4</td>
                      <td className="border-r">1</td>
                      <td className="border-r">$90.00</td>
                      <td className="border-r">$134.50</td>
                      <td>$160.00 </td>
                    </tr>
                    <tr >
                      <td scope="row" className="p-3 border-r">
                        TSLA[5]{" "}
                      </td>
                      <td className="border-r">46 </td>
                      <td className="border-r">24</td>
                      <td className="border-r">17</td>
                      <td className="border-r">5</td>
                      <td className="border-r">$90.00</td>
                      <td className="border-r">$210.00</td>
                      <td>$320.00 </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                <span className="text-dark fw-bold mt-3 dark:!text-white">
                  FIG. 4.
                </span>{" "}
                – Displayed above are the count of polled analysts, as well as
                their action recommendations and price target statistics; these
                data points were pulled from https://money.cnn.com[1 – 5].{" "}
              </p>
              <p className="text-gray-500 mt-5 text-justify leading-relaxed">
                In the examples above, the selected stocks are the 5 largest
                publicly traded American corporations. Notice that even for
                these companies, the count of polled analysts does not seem
                statistically significant. Further, despite having access to the
                same information, these analysts reach vastly different
                recommendations and price targets, which reduces the system’s
                reliability. Hence, in the development of Finulab our main focus
                was on improving this system so that it can generate
                statistically reliable results, which can then better inform the
                general public. To do so, we must first answer the following
                question: we will then utilize our response to the question to
                address the guiding problem statement of this white paper.{" "}
              </p>
              <p className="text-dark fw-semibold mt-3 dark:!text-white">
                1.To generate statistically reliable results, who should be
                surveyed for recommendations and price targets?{" "}
              </p>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                Our answer to this question, which is documented in the next
                section, relies on the following notations.{" "}
              </p>
              <div className="row">
                <div className="col-sm-8 col-md-6">
                  <div className="box bg-white rounded-2xl p-2 dark:!bg-gray-900 dark:!text-white">
                    <p>
                      <span className="text-info">η </span> | a non-negative
                      integer, a number in the set [0,1,2,…,∞)
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-9">
                  <div className="box bg-white rounded-2xl p-2 mt-2 dark:!bg-gray-900 dark:!text-white">
                    <p>
                      <span className="text-info">
                        b<sub>p</sub>
                      </span>{" "}
                      | bid price, the price which an independent buyer is
                      willing to pay for a share or coin
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-9">
                  <div className="box bg-white rounded-2xl p-2 mt-2 dark:!bg-gray-900 dark:!text-white">
                    <p>
                      <span className="text-info">
                        a<sub>p</sub>
                      </span>{" "}
                      | ask price, the price which an independent seller is
                      willing to accept for a share or coin
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-8">
                  <div className="box bg-white rounded-2xl p-2 mt-2 dark:!bg-gray-900 dark:!text-white">
                    <p>
                      <span className="text-info">
                        T = {"{"} t<sub>0</sub>, t<sub>1</sub>, t<sub>2</sub>,
                        ... {"}"}
                      </span>{" "}
                      | a set of all possible future times, the current time set
                      to t0 𝑡
                    </p>
                  </div>
                </div>

                <div className="col-sm-12 col-md-8">
                  <div className="box bg-white rounded-2xl p-2 mt-2 dark:!bg-gray-900 dark:!text-white">
                    <p>
                      <span className="text-info">
                        P = {"{"} p<sub>t0</sub>, p<sub>t1</sub>, p<sub>t2</sub>
                        , ... {"}"}
                      </span>{" "}
                      | a set of all stock prices correlating to each time in
                      the set T
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Section-2-1 ends --> */}

            {/* <!-- Section-2-2 starts --> */}
            <div id="section-2-2" className="my-5 ms-5">
              <h2 className="text-3xl text-black font-semibold dark:!text-white">
                2 - 2: Motivation for Finulab – Intermission Part 2{" "}
              </h2>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                In order to address the question in the previous section, we
                must first define market price, and determine how its numeric
                value is reached. NASDAQ’s glossary defines “market prices” as,
                “the amount of money that a willing buyer pays to acquire
                something from a willing seller, when a buyer and seller are
                independent and when such an exchange is motivated by only
                commercial consideration”[6]. Given that this definition appears
                appropriate and reasonable, we will use it in this paper.
                Hereafter, when we write market price, we are referring to the
                amount of money utilized to facilitate a transaction between an
                independent seller and buyer.
              </p>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                {" "}
                Now we can turn our attention to how the numeric value of market
                price is reached. Let’s consider the following scenario—assume
                that there exist only two market participants with one being an
                independent seller of a single stock for an ask price of 𝑎 , and
                the other being an independent buyer of that stock with a bid
                price of 𝑏 . In this scenario, for a transaction to take place
                between them, note that one of the following must be true:{" "}
              </p>
              <div className="row">
                <div className="col-sm-6 col-md-2">
                  <div className="box bg-white rounded-2xl p-2 mt-2 dark:!bg-gray-900 dark:!text-white">
                    <p>
                      <span className="text-info fw-bold">1</span> | a
                      <sub>p</sub>=b<sub>p</sub>,
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-2">
                  <div className="box bg-white rounded-2xl p-2 mt-2 dark:!bg-gray-900 dark:!text-white">
                    <p>
                      <span className="text-info fw-bold">2 </span> | or a
                      <sub>p</sub> ≤ b<sub>p</sub>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="box bg-white rounded-2xl mt-3 p-3  dark:!bg-gray-900">
                <p className="text-black dark:!text-white">
                  Note: we have decided to leave out the case of ap ≥ bp,
                  because if ap = bp, then this scenario simplifies to the first
                  case above. However, if ap bp, then no transaction takes place
                  between the buyer and seller.{" "}
                </p>
              </div>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                In the first case, the ask and bid price are strictly equal.
                Hence, the seller receives the amount he or she is willing to
                accept, while the buyer spends the amount he or she is willing
                to pay. In this scenario, not only do we know that a transaction
                will take place, but we also know the exact market price, which
                is ap or bp . Granted they are strictly equal, it does not
                matter which.{" "}
              </p>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                In the second case, the ask price is less than or equal to the
                bid price. Hence, we know that a transaction will take place;
                given that: the seller will at least receive the amount he or
                she is willing to accept, while the buyer will at most spend the
                amount he or she is willing to pay. However, despite knowing
                that a transaction will take place, note that we do not know the
                exact market price. If the seller is kind, he or she will sell
                the stock for and receive ap. However, if the seller recognizes
                that the buyer is willing to pay more, he or she will most
                likely increase the price to: x such that ap {"<"} x ≤ bp.
                Hence, the market price appears to be a random amount in the
                range of x ≤ bp and we will not know x (i.e., the market price)
                until the transaction between the seller and buyer is finalized.
              </p>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                Expanding on our observations from this scenario, in the stock
                or cryptocurrency markets where multiple orders flow through, we
                will not be able to predict beforehand participants’ exact ask
                or bid prices. As a result of that, as well as a potential
                negotiation that may take place as demonstrated above in case 2,
                the market price appears to be a random variable—an unknown
                amount which is determined momentarily when a seller and a buyer
                reach a transaction agreement. However, following their
                transaction, it appears that the market price becomes an unknown
                amount again until another seller and buyer reach a transaction
                agreement.
              </p>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                Given that the market price’s numeric value seems to be
                determined through the random ask and bid process, we may never
                know beforehand, the exact price of a stock at some time in the
                future. However, we certainly do know the individuals
                responsible for setting the market price. If we assume that T ={" "}
                {"{"} t0, t1, t2, … {"}"} is the set of all future times
                beginning with the current time, t0, and P = {"{"} pt0, pt1,
                pt2, … {"}"} is the set of all market prices correlated to the
                times in the set T. Then, for any stock or cryptocurrency, the
                market price (i.e., ptn), at time tn, is determined by market
                participants; specifically, the subset of market participants
                submitting asks and bids as illustrated in the following
                diagram.
              </p>
              <div className="row">
                <div className="col-sm-12 col-md-6 mt-5">
                  <h3 className="font-bold text-xl dark:!text-white mt-5">
                    set of all market participants at time tn
                  </h3>
                  <p className="text-gray-500 mt-4 text-justify leading-relaxed">
                    <span className="text-dark fw-bold dark:!text-white ">
                      FIG. 5.
                    </span>{" "}
                    – At time 𝑡 , detailed above in the gray is the subset of
                    market participants that can determine the market price 𝑝
                    for any stock.{" "}
                  </p>
                </div>
                <div className="col-sm-12 col-md-6">
                  <img
                    src={image4}
                    alt="SecondDiagram"
                    className="img-fluid mt-3"
                  />
                </div>
              </div>
              <p className="text-gray-500 mt-5 text-justify leading-relaxed">
                For any stock or cryptocurrency, even though we do know that
                market participants will set the market price at time tn, given
                that the subset of participants submitting asks and bids will
                change over time, the precise answer to the question specified
                in the previous section{" "}
                <span className="text-info fw-bold">(section 2 - 1)</span> is
                time-dependent. In order to precisely determine a reasonable
                recommendation and price target for time tn at time t0, we will
                need to:{" "}
              </p>
              <ol className="font-semibold text-black mt-3">
                <li>
                  1.identify the exact subset of market participants that will
                  be submitting asks and bids at time tn, and{" "}
                </li>
                <li>
                  2.survey them after they have been provided all the market
                  information that will be available at time tn .{" "}
                </li>
              </ol>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                At time t0, neither of the above is achievable—however,
                identifying market participants’ current outlooks for the future
                of any stock or cryptocurrency, based on all publicly available
                information, is certainly possible. By market participants’
                current outlooks, we are referring to their average price target
                and recommendations distribution (i.e., the percentage of
                participants that recommend buy, hold, or sell) at time t0.
                These current outlooks can only apply until some time in the
                future (i.e., t0) when material information, which was
                previously unknown in the period between t1 to tn-1𝑡 , is made
                available to the public. Despite this limitation, we can
                certainly leverage market participants’ current outlooks to make
                inferences about the market state and potential future price
                movements.{" "}
              </p>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                Hence, our answer, to the question proposed in{" "}
                <span className="text-info fw-bold">section 2 - 1,</span> is
                market participants. We believe that surveying market
                participants over analysts provides more accurate
                recommendations and price targets. Note that most analysts are
                not allowed to trade the stocks or sectors which they cover; in
                these cases, they do not have a direct impact on the market
                price. However, they do have an indirect impact on price through
                market participants’ interpretation of their research and
                publications. This implies if we are trying to identify the
                markets’ future expectations, we should go directly to the
                participants’ that drive market price.{" "}
              </p>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                Now that we have identified our target survey population, which
                is market participants, we can now return to and address the
                guiding problem statement of this white paper{" "}
                <span className="text-info fw-bold">(section 0 - 0),</span>{" "}
                which is also restated below.
              </p>
              <p className=" mt-3 text-justify leading-relaxed text-gray-500 dark:!text-white">
                <span className="fw-bold text-dark dark:!text-white">
                  1. In the stock and cryptocurrency markets, how can we
                  accurately capture market participants:
                </span>
                <br />
                a. average price target, and
                <br />
                b. recommendations distribution (i.e., percentage of
                participates that recommend buy, hold, or sell)?{" "}
              </p>
            </div>
            {/* <!-- Section-2-2 ends --> */}

            {/* <!-- Section-3-1 starts --> */}
            <div id="section-3-1" className="my-5 ms-5">
              <h2 className="text-3xl text-black font-semibold dark:!text-white">
                3 - 1: Finulab – Quantitative Objective
              </h2>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                In addition to providing market participants the ability to
                critically discuss stocks and cryptos
                <span className="fw-bold text-info">(section 3 - 4),</span> our
                objective, in the development of Finulab, is to quantitatively
                capture market participants’ future outlooks so that we can
                directly address the problem statement of this white paper{" "}
                <span className="fw-bold text-info">(section 0 - 0).</span>{" "}
                Hence, Finulab contains functionalities which empowers users
                with the ability to provide their price target and
                recommendation (i.e., buy, hold, or sell) for any stock or
                cryptocurrency. As mentioned in{" "}
                <span className="fw-bold text-info">section 2 - 2,</span> price
                targets and recommendations are only valid until some new
                material information enters the public knowledge. Hence, to
                accommodate for the changes is public information, users are
                also granted the privilege of being able to update their price
                targets and recommendations at any time.
              </p>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                Given that Finulab is an application centered around stocks and
                cryptocurrencies, we expect a vast majority of its users to be
                market participants. Hence, through the functionality mentioned
                in the previous paragraph, we will be able to approximate the
                market participants’ average price target and recommendation
                distribution for any stock or cryptocurrency at a specific
                confidence level and within a certain margin of error. We
                believe it is important to call out the confidence level and
                margin of error associated with each stock or cryptocurrency’s
                survey results, as these two figures underscore the reliability
                of our approximations. The results of the price target and
                recommendations surveys, as well as the confidence level and
                margin of error associated with each result, will be made
                available to the general public and all users of Finulab. We
                believe it is important to make this information publicly
                available, as our objective with Finulab is to provide market
                participants a data terminal that can be informative and
                supportive in the performance of due diligence and market
                research.{" "}
              </p>

              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                Furthermore, given that the data Finulab collects through these
                surveys is a byproduct of users’ contributions, it is important
                to us to develop Finulab with transparency and ensure that its
                market related data is publicly available. As mentioned
                previously in{" "}
                <span className="text-info fw-bold">section 0 - 0,</span> we
                consider users’ contributions on Finulab, including these survey
                responses, to be a form of service. As such, all survey
                responses will be rewarded with Finux tokens; for further detail
                on Finulab’s reward protocol, see{" "}
                <span className="text-info fw-bold">section 3 - 5.</span>
              </p>

              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                Concerning to our statements in{" "}
                <span className="text-info fw-bold">section 2 - 1,</span>{" "}
                regarding the count of polled analysts not appearing to be
                statistically significant, we can now expound further to
                determine the minimum sample size of users we need to survey on
                Finulab in order to reasonably approximate the market’s average
                price target and recommendations distribution. The methodology
                we used to determine the minimum sample size for average price
                targets and recommendations distribution is documented in{" "}
                <span className="text-info fw-bold">
                  section 3 - 2 and 3 - 3,
                </span>
                respectively. Further, our full answer to the guiding problem of
                this white paper is documented in{" "}
                <span className="text-info fw-bold">section 3 - 4.</span>
              </p>
            </div>

            {/* <!-- Section-3-1 ends --> */}

            {/* <!-- Section-3-2 starts --> */}
            <div id="section-3-2" className="my-5 ms-5">
              <h2 className="text-3xl text-black font-semibold dark:!text-white">
                3 - 2: Finulab – Minimum Sample Size Required to Approximate
                Average Price Target
              </h2>
              <p className="text-gray-500 mt-4 text-justify leading-relaxed">
                Our objective is to identify the average price target of market
                participants for any given stock or cryptocurrency. We can
                achieve that by surveying all market participants—unfortunately,
                achieving that is not possible; furthermore, it is unnecessary.
                We can instead find and survey the required minimum sample size
                of market participants to obtain a reasonable approximation of
                the entire population’s (i.e., all market participants’) average
                price target. A minimum sample size is the smallest number of
                observations that is required to obtain a statistically reliable
                result—by statistically reliable, we mean a high confidence
                level (i.e., ≥ 90%) and small margin of error (i.e., ≤ $0.03).
                In this segment, we will first discuss the approximate minimum
                sample size required to find market participants’ average price
                target for the stocks selected as examples in{" "}
                <span className="text-info fw-bold">FIG 4. </span> we will shift
                our focus on to the general methodology that will be used on
                Finulab to identify the average price target, as well as the
                confidence level and margin of error, for any given stock or
                cryptocurrency. Our approach will rely on the following
                notations:
              </p>
              <div className="row">
                <div className="col-sm-8 col-md-5">
                  <div className="box bg-white rounded-2xl p-2 mt-2 dark:!text-white dark:!bg-gray-900">
                    <p>
                      <span className="text-info">X </span> | average price
                      target of surveyed users
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-10">
                  <div className="box bg-white rounded-2xl p-2 mt-2 dark:!text-white dark:!bg-gray-900">
                    <p>
                      <span className="text-info">Ta/2</span> | critical
                      t-value, i.e., t-score associated with a confidence level
                      of 1−with−1 degrees of freedom
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-7">
                  <div className="box bg-white rounded-2xl p-2 mt-2 dark:!text-white dark:!bg-gray-900">
                    <p>
                      <span className="text-info">Za/2</span> | critical
                      z-value, i.e., z-score associated with a level of 1− ∝
                    </p>
                  </div>
                </div>
                <div className="col-sm-8 col-md-5">
                  <div className="box bg-white rounded-2xl p-2 mt-2 dark:!text-white dark:!bg-gray-900">
                    <p>
                      <span className="text-info">s</span> | standard deviation
                      across all the samples
                    </p>
                  </div>
                </div>
                <div className="col-sm-8 col-md-5">
                  <div className="box bg-white rounded-2xl p-2 mt-2 dark:!text-white dark:!bg-gray-900">
                    <p>
                      <span className="text-info">n</span> | count of surveyed
                      users (i.e., sample size)
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3">
                  <div className="box bg-white rounded-2xl p-2 mt-2 dark:!text-white dark:!bg-gray-900">
                    <p>
                      <span className="text-info">d</span> | desired margin of
                      error
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                To approximate the minimum required sample size for the selected
                stocks in FIG 4, we will use the following formula: 𝑛 =𝑧 / ∙( )
                . Note that:{" "}
              </p>
              <ol className="text-black mt-3 font-medium dark:!text-white">
                <li>
                  1. as we do not know the actual standard deviation for the
                  price targets of all market participants’, we will approximate
                  𝑠 by setting it equal to the standard deviation in each
                  stock’s close price across the past 60 days.{" "}
                </li>
                <li>
                  {" "}
                  2.Further, even though, we should use a t-distribution in the
                  event of an unknown standard deviation, we expect that we will
                  require over 31 samples. At a degree of freedom greater than
                  30, the difference between a t-distribution and a normal
                  distribution is negligible, especially for approximation
                  purposes. Hence, instead of a critical t-value, we will be
                  using a critical z-value (i.e., 𝑧 / ).{" "}
                </li>
                <li>
                  3. We have also assumed that the population of market
                  participants is large enough for finite correction factors to
                  be ignored, if sampling is done without replacement.{" "}
                </li>
              </ol>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                Leveraging the formula above, we have obtained the following
                results—for our comprehensive calculations, refer to the support
                for this white paper{" "}
                <span className="fw-bold text-dark dark:!text-white">
                  Finux.A, tabs 0-1, 1-1, 1-2, 1-3, 1-4, and 1-5.
                </span>
              </p>
              {/* <!-- 1st table of this section starts --> */}
              <div className="table-responsive mt-3  ">
                <table className="rounded-table rounded-3xl text-center w-full bg-white dark:!bg-gray-900  mt-3 text-black dark:!text-white p-3 ">
                  <thead>
                    <tr className="border-b">
                      <td scope="row" className="text-warning p-4 border-r">
                        as of Mar 22, 2023
                      </td>
                      <td className="text-warning border-r">standard deviation</td>
                      <td className="text-warning border-r">desired margin of error </td>
                      <td className="text-warning border-r">confidence level of 90%</td>
                      <td className="text-warning">
                        minimum required sample size{" "}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th scope="col" className="border-r p-3">Stocks</th>
                      <th scope="col" className="border-r">~s</th>
                      <th scope="col" className="border-r">d</th>
                      <th scope="col" className="border-r">Za/2</th>
                      <th scope="col">n</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="border-r p-3" scope="row">AAPL</td>
                      <td className="border-r">9.82</td>
                      <td className="border-r">0.03</td>
                      <td className="border-r">1.645 </td>
                      <td>568,985</td>
                    </tr>
                    <tr className="border-b">
                      <td scope="row" className="border-r p-3">MSFT</td>
                      <td className="border-r">13.76</td>
                      <td className="border-r">0.03</td>
                      <td className="border-r">1.645</td>
                      <td>568,985</td>
                    </tr>
                    <tr className="border-b">
                      <td scope="row" className="border-r p-3">GOOG</td>
                      <td className="border-r">5.47 </td>
                      <td className="border-r">0.03</td>
                      <td className="border-r">1.645</td>
                      <td>90,090</td>
                    </tr>
                    <tr className="border-b">
                      <td scope="row" className="border-r p-3">AMZN</td>
                      <td className="border-r">6.29 </td>
                      <td className="border-r">0.03</td>
                      <td className="border-r">1.645</td>
                      <td>118,982</td>
                    </tr>
                    <tr >
                      <td scope="row" className="border-r p-3">TSLA </td>
                      <td className="border-r">34.91 </td>
                      <td className="border-r">0.03</td>
                      <td className="border-r">1.645</td>
                      <td>3,663,690</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!-- 1st table of this section ends --> */}
              {/* <!-- 2nd table of this section starts --> */}
              <div className="table-responsive mt-5">
                <table className="rounded-table rounded-3xl text-center w-full bg-white dark:!bg-gray-900  mt-3 text-black dark:!text-white p-3 ">
                  <thead>
                    <tr className="border-b">
                      <td scope="row" className="text-warning border-r p-3">
                        as of Mar 22, 2023
                      </td>
                      <td className="text-warning border-r">standard deviation</td>
                      <td className="text-warning border-r">desired margin of error </td>
                      <td className="text-warning border-r ">confidence level of 90%</td>
                      <td className="text-warning">
                        minimum required sample size{" "}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th scope="col" className="border-r p-3">Stocks</th>
                      <th scope="col" className="border-r">~s</th>
                      <th scope="col" className="border-r">d</th>
                      <th scope="col" className="border-r">Za/2</th>
                      <th scope="col">n</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td scope="row" className="border-r p-3">AAPL</td>
                      <td className="border-r">9.82</td>
                      <td className="border-r">0.03</td>
                      <td className="border-r">1.960 </td>
                      <td>1.960</td>
                    </tr>
                    <tr className="border-b">
                      <td scope="row" className="border-r p-3">MSFT</td>
                      <td className="border-r">13.76</td>
                      <td className="border-r">0.02</td>
                      <td className="border-r">1.960</td>
                      <td>1,817,711</td>
                    </tr>
                    <tr className="border-b">
                      <td scope="row" className="border-r p-3">GOOG</td>
                      <td className="border-r">5.47 </td>
                      <td className="border-r">0.02</td>
                      <td className="border-r">1.960</td>
                      <td>287,804</td>
                    </tr>
                    <tr className="border-b">
                      <td scope="row" className="border-r p-3">AMZN</td>
                      <td className="border-r">6.29 </td>
                      <td className="border-r">0.02</td>
                      <td className="border-r">1.960</td>
                      <td>380,105</td>
                    </tr>
                    <tr >
                      <td scope="row" className="border-r p-3">TSLA </td>
                      <td className="border-r">34.91 </td>
                      <td className="border-r">0.02</td>
                      <td className="border-r">1.960</td>
                      <td>11,704,231</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!--2nd table of this section ends  --> */}
              {/* <!--3rd table of this section starts  --> */}
              <div className="table-responsive mt-5">
                <table className="rounded-table rounded-3xl text-center w-full bg-white dark:!bg-gray-900  mt-3 text-black dark:!text-white p-3 ">
                  <thead>
                    <tr className="border-b">
                      <td scope="row" className="text-warning border-r p-3">
                        as of Mar 22, 2023
                      </td>
                      <td className="text-warning border-r">standard deviation</td>
                      <td className="text-warning border-r">desired margin of error </td>
                      <td className="text-warning border-r ">confidence level of 90%</td>
                      <td className="text-warning">
                        minimum required sample size{" "}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <th scope="col" className="border-r p-3">Stocks</th>
                      <th className="border-r" scope="col">~s</th>
                      <th className="border-r" scope="col">d</th>
                      <th className="border-r" scope="col">Za/2</th>
                      <th scope="col">n</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td scope="row" className="border-r p-3">AAPL</td>
                      <td className="border-r">9.82</td>
                      <td className="border-r">0.01</td>
                      <td className="border-r">2.576 </td>
                      <td>6,404,183</td>
                    </tr>
                    <tr className="border-b"> 
                      <td scope="row" className="border-r p-3">MSFT</td>
                      <td className="border-r">13.76</td>
                      <td className="border-r">0.01</td>
                      <td className="border-r">2.576</td>
                      <td>12,558,065 </td>
                    </tr>
                    <tr className="border-b">
                      <td scope="row" className="border-r p-3">GOOG</td>
                      <td className="border-r">5.47 </td>
                      <td className="border-r">0.01</td>
                      <td className="border-r">2.576</td>
                      <td>1,988,357</td>
                    </tr>
                    <tr className="border-b">
                      <td scope="row" className="border-r p-3">AMZN</td>
                      <td className="border-r">6.29 </td>
                      <td className="border-r">0.01</td>
                      <td className="border-r">2.576</td>
                      <td>2,626,040</td>
                    </tr>
                    <tr >
                      <td scope="row" className="border-r p-3">TSLA </td>
                      <td className="border-r">34.91 </td>
                      <td className="border-r">0.01</td>
                      <td className="border-r">2.576</td>
                      <td>80,861,320</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* <!--3rd table of this section ends  --> */}
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                <span className="text-dark fw-bold dark:!text-white">
                  FIG. 6.
                </span>{" "}
                – We determined the approximate minimum sample size at a
                confidence level of 90%, 95%, and 99%; these confidence levels
                were matched with a desired margin of error of 3%, 2%, and 1%,
                respectively. Detailed above is the summary of the calculation
                performed at Finux.A, tabs 0-1 to 1-5.{" "}
              </p>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                Our main objective in including the tables above is to highlight
                that even at a desired confidence level of 90% and margin of
                error of $0.03, we need to poll a significant amount of market
                participants to approximate the market’s price target for any
                given stock. Notice that in
                <span className="text-info fw-bold">FIG 3,</span> AMZN had the
                largest count of polled analysts at a count of 53— at a
                confidence level of 90% and a margin of error of $0.03, we would
                need 118,982 polled market participants to find the
                approximation of the market’s average price target for AMZN.
                Hence, if our objective is to approximate the market’s future
                outlooks on the price target of any stock as accurately as
                possible, analysts price targets are not too reliable. This is
                because, if we assume a confidence level of 90%, the margin of
                error with a sample count of 53 is $2.34. This is not too
                reliable, especially when you consider the frequency with which
                their targets are updated, as well as the fact that most
                analysts cannot trade the stocks which they cover (implying that
                cannot partake in the pricing process of the market).
              </p>

              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                Hence, to improve this system, on Finulab we will instead be
                polling users, which should serve as a good proxy for market
                participants. Furthermore, given that it’s a free and open
                platform, we believe the high minimum sample counts,
                demonstrated above in{" "}
                <span className="text-info fw-bold">FIG 3,</span> is achievable.
                As a result, we will be able to approximate the market’s average
                price target for any given stock or cryptocurrency with a high
                confidence level and small margin of error. On Finulab, rather
                than just stating the average price target, we underscore the
                average market price alongside the confidence level and margin
                of error. Furthermore, we will display the confidence interval
                to allow users to better visual the potential distribution of
                the market’s average price distribution. The methodology we will
                use to do so will rely on the number of samples, as highlighted
                below.{" "}
              </p>
              <ol className="text-black font-medium mt-3 dark:!text-white">
                <li>
                  1. If we obtain 30 samples or less, we will utilize a
                  t-distribution to construct the confidence interval, through
                  the following formula: 𝑥±𝑡 / ∙ √ ..{" "}
                </li>
                <li>
                  2. However, if we obtain over 30 samples, we will instead use
                  a normal distribution to construct the confidence interval,
                  through the following formula: : 𝑥±𝑧 / ∙ √ .{" "}
                </li>
              </ol>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                Through this approach, we believe that we can not only more
                accurately approximate the market’s price targets, but we can
                also ensure users have a clearer understanding of the
                reliability of our results on Finulab.{" "}
              </p>
            </div>
            {/* <!-- Section-3-2 ends --> */}
            {/* <!-- Section-3-3 starts --> */}
            <div id="section-3-3" className="my-5 ms-5">
              <h2 className="text-3xl text-black font-semibold dark:!text-white">
                3 - 3: Finulab – Minimum Sample Size Required to Approximate
                Recommendations Distribution{" "}
              </h2>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                Our objective here is to identify the percentage of market
                participants that recommend buy, hold, or sell for any given
                stock or cryptocurrency. Similar to the average price target, we
                can achieve this through surveying all market participants;
                however, that is not feasible or necessary. We can instead
                sample a portion of market participants to approximate the
                recommendations distribution for any given stock or
                cryptocurrency. Similar to the average price target, our goal is
                to maximize the confidence level and minimize the margin of
                error as well. As such, we will follow the same format. We will
                first discuss the approximate minimum sample size required to
                find the distribution of market participants’ recommendations
                for any given stock or cryptocurrency. Thereafter, we will shift
                our focus on to the general methodology that will be used on
                Finulab to identify the recommendation distribution, as well as
                the confidence level and margin of error. Our approach will rely
                on the following notations:
              </p>
              <div className="row">
                <div className="col-sm-8 col-md-6">
                  <div className="bg-white rounded-2xl p-2 mt-2 dark:!text-white dark:!bg-gray-900">
                    <p>
                      <span className="text-info">
                        π<sub>b</sub>{" "}
                      </span>{" "}
                      | percentage of surveyed users that recommend buy
                    </p>
                  </div>
                </div>
                <div className="col-sm-8 col-md-6">
                  <div className="bg-white rounded-2xl p-2 mt-2 dark:!text-white dark:!bg-gray-900 ">
                    <p>
                      <span className="text-info">
                        π<sub>h</sub>{" "}
                      </span>{" "}
                      | percentage of surveyed users that recommend hold
                    </p>
                  </div>
                </div>
                <div className="col-sm-8 col-md-5">
                  <div className="bg-white rounded-2xl p-2 mt-2 dark:!text-white dark:!bg-gray-900">
                    <p>
                      <span className="text-info">
                        π<sub>s</sub>{" "}
                      </span>
                      |percentage of users that recommend sell
                    </p>
                  </div>
                </div>
                <div className="col-sm-8 col-md-7">
                  <div className="bg-white rounded-2xl p-2 mt-2 dark:!text-white dark:!bg-gray-900">
                    <p>
                      <span className="text-info">
                        z<sub>a/2</sub>{" "}
                      </span>
                      | z-value, i.e., z-score associated with confidence level
                      of 1− ∝
                    </p>
                  </div>
                </div>
                <div className="col-sm-8 col-md-9">
                  <div className="bg-white rounded-2xl p-2 mt-2 dark:!text-white dark:!bg-gray-900">
                    <p>
                      <span className="text-info">m </span>| an integer such
                      that 0𝑚≤3; note that 3 is the count of categories (buy,
                      hold, or sell){" "}
                    </p>
                  </div>
                </div>
                <div className="col-sm-8 col-md-4">
                  <div className="bg-white rounded-2xl p-2 mt-2 dark:!text-white dark:!bg-gray-900">
                    <p>
                      <span className="text-info">d </span>| desired margin of
                      error{" "}
                    </p>
                  </div>
                </div>
                <div className="col-sm-8 col-md-5">
                  <div className="bg-white rounded-2xl p-2 mt-2 dark:!text-white dark:!bg-gray-900">
                    <p>
                      <span className="text-info">n </span>| count of surveyed
                      users (i.e., sample size){" "}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                To approximate the minimum required sample size for any stock or
                cryptocurrency, we will use the following formula[7]: 𝑛 =𝑚𝑎𝑥 [𝑧
                / ∙ ]. Note that:{" "}
              </p>
              <ol className="text-black font-medium mt-3 dark:!text-white">
                <li>
                  1. we have assumed that the population of market participants
                  is large enough for finite correction factors to be ignored,
                  if sampling is done without replacement, and that sample sizes
                  are large enough for the normal approximation to be used.{" "}
                </li>
                <li>
                  2. Further, given that our objective is to approximate the
                  recommendations distribution (percentage of market
                  participants that recommend buy, hold, or sell), our results
                  are applicable to all stocks or cryptocurrencies.
                </li>
              </ol>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                Leveraging the formula above, we have obtained the following
                results—for our comprehensive calculations, refer to the support
                for this white paper
                <span className="fw-bold text-dark dark:!text-white">
                  Finux.A, tabs 0-1and 2-1..
                </span>
              </p>
              <div className="row">
                <div className="col-sm-12 col-md-5">
                  <p className="text-gray-500 mt-5 text-justify leading-relaxed">
                    <span className="fw-bold text-dark dark:!text-white">
                      FIG. 7.
                    </span>{" "}
                    – We determined the approximate minimum sample size at a
                    confidence level of 90%, 95%, and 99%; these confidence
                    levels were matched with a desired margin of error of 3%,
                    2%, and 1%, respectively. Detailed above is the summary of
                    the calculation performed at Finux.A, tabs 0-1 to 2-1.{" "}
                  </p>
                </div>
                <div className="col-sm-12 col-md-7">
                  {/* <table className="table mt-5 Box_theme table-sm table-bordered rounded-table text-center"> */}
                  <table className="rounded-table rounded-3xl text-center w-full bg-white dark:!bg-gray-900  mt-3 text-black dark:!text-white p-3 ">
                    <thead>
                      <tr className="border-b">
                        <td scope="row" className="text-warning  border-r p-2">
                          desired margin of error{" "}
                        </td>
                        <td className="text-warning border-r ">
                          confidence level of 90%
                        </td>
                        <td className="text-warning ">
                          minimum required sample size{" "}
                        </td>
                      </tr>
                      <tr className="border-b">
                        <th scope="col" className="border-r p-2">d</th>
                        <th scope="col" className="border-r">𝟏−a;za/2</th>
                        <th scope="col">n</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b ">
                        <td scope="row" className="border-r p-2">0.03</td>
                        <td className="border-r">90% ; 1.645 </td>
                        <td>1,119</td>
                      </tr>
                      <tr className="border-b">
                        <td scope="row" className="border-r p-2">0.02</td>
                        <td className="border-r">95% ; 1.960</td>
                        <td>3,184 </td>
                      </tr>
                      <tr >
                        <td scope="row" className="border-r p-2">0.01</td>
                        <td className="border-r">99% ; 2.576</td>
                        <td>19,699</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                Our objective in including the table above is to demonstrate
                that if we want to approximate market participants’
                recommendation distribution such that the probability will be at
                least 90% that all of the estimated proportions (i.e.,
                percentage of market participants that recommend buy, hold, or
                sell) will simultaneously be within 3% of the true proportion,
                we will need 1,119 survey responses. Referring back to{" "}
                <span className="fw-bold text-info dark:!text-white">
                  FIG 4,
                </span>{" "}
                AMZN had the largest count of polled analysts at 53—if our
                objective is to find the true distribution of recommendations,
                at a confidence level of 90%, we can approximately expect the
                margin of error from a sample size of 53 to be 13%. As a
                byproduct, if our goal is to utilize the distribution of
                analysts’ recommendations to make market inferences, a sample
                size of 53 is not too reliable.{" "}
              </p>

              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                Hence, to improve the system, on Finulab we will poll users for
                their recommendations. Thereafter, we will display the
                distribution of recommendations, as well as the confidence level
                and margin of error associated with the survey, for all stocks
                and cryptocurrencies. To determine the margin of error, note
                that we will use the formula stated above. Through this
                approach, we believe can more accurately approximate the
                recommendations distribution of market participants to better
                inform Finulab users. Furthermore, users can assess the
                reliability of the polls results through our confidence level
                and margin of error figures for any stock or cryptocurrency.{" "}
              </p>
            </div>
            {/* <!-- Section-3-3 ends --> */}

            {/* <!-- Section-3-4 starts --> */}
            <div id="section-3-4" className="my-5 ms-5">
              <h2 className="text-3xl text-black font-semibold dark:!text-white">
                3 - 4: Finulab – Qualitative Objective{" "}
              </h2>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                The quantitative analysis of market participants’ average price
                targets and recommendation distributions, alongside the vast
                amount market data available on Finulab, can only provide a
                limited perspective of the market. Even if we may understand and
                visualize the numerical values, the underlying factors driving
                these figures, the “why”, may not be immediately apparent.
                Hence, to complement the quantitative aspects of the platform,
                Finulab also has social media features built-in, which allows
                market participants to engage in free and open critical
                discussions. Through the social media aspect of the platform,
                the quantitative segment of due diligence and market research
                can be adequately complemented by the qualitive analysis in
                order to provide users a more comprehensive perspective on the
                layout of the market.
              </p>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                Especially in a volatile market, it is necessary to crowd-source
                market participants’ insights, in real-time, to truly capture
                the state of the market and make a more well-informed decision.
                Furthermore, users’ discussions and realtime insights can
                clarify the average price targets and recommendation
                distribution data that will be available for any given stock or
                cryptocurrency on Finulab. As such, we consider users
                qualitative contributions just as useful as their quantitative
                contribution. Hence, users of the Finulab platform will also
                receive rewards in Finux tokens for posts, comments, and the
                creation of communities based on the level of engagement that is
                received.{" "}
              </p>
            </div>
            {/* <!-- Section-3-4 ends --> */}

            {/* <!-- Section-3-5 starts --> */}
            <div id="section-3-5" className="my-5 ms-5">
              <h2 className="text-3xl text-black font-semibold dark:!text-white">
                3 - 5: Finulab – Reward Protocol{" "}
              </h2>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                As mentioned previously, the only way to earn Finux tokens is to
                contribute and engage with Finulab. Granted that Finux has a
                capped maximum supply, user rewards will decrease over time.
                Detailed below is the table highlighting the initial baseline
                for each engagement type’s reward.
              </p>
              <div className="table-responsive mt-3  ">
                <table className=" text-sm bg-white  rounded-table rounded-3xl dark:!bg-gray-900 text-black dark:!text-white  ">
                  
                  <thead>
                   <tr >
                   <td colSpan="3" className="text-warning fw-bold border-b p-3">
                    User-Rewards Baseline{" "}
                  </td>
                   </tr>
                  
                  <tr className="border-b">
                      <th scope="col" className="border-r p-3">Action </th>
                      <th scope="col" className="border-r p-3" >Description </th>
                      <th scope="col" className="p-3">Reward (in Finux) </th>
                    </tr>
                    </thead>
                  <tbody>
                    <tr className="border-b">
                      <td scope="row" className="border-r p-3">Sign-Up</td>
                      <td className="border-r p-3">User creates a Finulab account.</td>
                      <td className="p-3">5</td>
                    </tr>
                    <tr className="border-b">
                      <td scope="row" className="border-r p-3">Invite</td>
                      <td className="border-r p-3">
                        User invites another individual, and he/she creates a
                        Finulab account.
                      </td>
                      <td className="p-3">10</td>
                    </tr>
                    <tr className="border-b">
                      <td scope="row" className="border-r p-3">Post Liked </td>
                      <td className="border-r p-3">User’s post receives a like. </td>
                      <td className="p-3">0.01</td>
                    </tr>
                    <tr className="border-b">
                      <td scope="row" className="border-r p-3">Post Disliked </td>
                      <td className="border-r p-3"> User’s post receives a dislike. </td>
                      <td className="p-3">0.01</td>
                    </tr>
                    <tr className="border-b">
                      <td scope="row" className="border-r p-3">Post Commented </td>
                      <td className="border-r p-3">User’s post receives a comment. </td>
                      <td className="p-3">2.5% of comments’ rewards</td>
                    </tr>
                    <tr className="border-b">
                      <td scope="row" className="border-r p-3">Comment Liked </td>
                      <td className="border-r p-3">User’s comment receives a like. </td>
                      <td className="p-3">0.002</td>
                    </tr>
                    <tr className="border-b">
                      <td scope="row" className="border-r p-3">Comment Disliked </td>
                      <td className="border-r p-3">User’s comment receives a dislike. </td>
                      <td className="p-3">0.002</td>
                    </tr>
                    <tr className="border-b">
                      <td scope="row" className="border-r p-3">Comment Replied </td>
                      <td className="border-r p-3">User’s comment receives a reply. </td>
                      <td className="p-3">2.5% of reply’s rewards. </td>
                    </tr>
                    <tr className="border-b">
                      <td scope="row" className="border-r p-3">Price Target</td>
                      <td className="border-r p-3">
                        User provides a price target for a stock or crypto.{" "}
                      </td>
                      <td className="p-3">0.1</td>
                    </tr>
                    <tr className="border-b">
                      <td scope="row" className="border-r p-3">Recommendation</td>
                      <td className="border-r p-3">
                        User provides a recommendation for a stock or crypto.{" "}
                      </td>
                      <td className="p-3">0.1</td>
                    </tr>
                    <tr >
                      <td scope="row" className="border-r p-3">Moderators’ Incentive</td>
                      <td className="border-r p-3">
                        Rewards to incentivize moderators of communities.{" "}
                      </td>
                      <td className="p-3">2.5% of community’s posts &rewards.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-500 mt-5 text-justify leading-relaxed">
                <span className="fw-bold text-dark dark:!text-white">
                  FIG. 8.
                </span>{" "}
                – Displayed above is the initial baseline for engagement rewards
                on Finulab. Note that the Sign-Up and Invite rewards will remain
                consistent and will exist only for limited amount of time.
                However, every other reward type will decrease overtime as the
                max supply of Finux is capped.{" "}
              </p>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                The Sign-Up and Invite rewards are only available for a limited
                amount of time to support Finulab reach a critical mass of
                users. Following that, those two reward types will be suspended.
                These two actions’ reward amounts of 5 and 10, respectively,
                will not be decreasing over time; they will consistently remain
                to be 5 and 10 until suspended.{" "}
              </p>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                However, all the other rewards will continue to exist, ever
                after a critical mass of users has been reached. For these
                reward types, the amounts, as show above, are a baseline. These
                reward amounts will continually decrease based on the engagement
                gained on Finulab, as well as the remain available supply of the
                Finux token that has not yet been distributed to the users. On a
                minute-by-minute bases, these reward amounts will be divided by
                the total supply of Finux tokens (i.e., 150M) and then
                multiplied by the remaining uncirculated supply of Finux tokens
                (i.e., 150M subtracted by users’ earned rewards). For example,
                if the uncirculated supply of Finux tokens is 109.09M, then the
                Price Target reward amount is: ~0.0727 (i.e., (0.1 ÷ 150M) x
                109.09M). Though this method of reward calculations, we ensure
                that the capped supply of Finux is not exceeded.{" "}
              </p>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                Furthermore, note that if the activity generated on Finulab
                grows fairly rapidly, it might not suffice to update the reward
                amounts on a minute-by-minute bases. If the rapid growth is
                consistent, it might result in all Finux tokens being
                distributed, which will leave future users unable to earn any.
                Therefore, it Finulab grows more rapidly than expected, instead
                of adjusting the reward amount on a minute-by-minute bases, we
                will adjust them at the engagement level (since engagements are
                what generates the rewards). At the moment, there isn’t a place
                where users will be able to find the current reward amounts.
                However, by June 30, 2024, we will also update the main Finux
                website (finux.xyz) to complement Finulab. At that point, the
                current reward amounts table, the estimated distribution
                forecast of the Finux token, as well as other supply data, will
                be on that site and available to all.{" "}
              </p>
            </div>
            {/* <!-- Section-3-5 ends --> */}

            {/* <!-- Section-4-1 starts --> */}
            <div id="section-4-1" className="my-5 ms-5">
              <h2 className="text-3xl text-black font-semibold dark:!text-white">
                4 - 1 – Conclusion{" "}
              </h2>
              <p className="text-gray-500 mt-3 text-justify leading-relaxed">
                Our objective in the creation of Finulab is to ensure that the
                general public is informed as accurately as possible on the
                current state of the market in both sentiment and hard financial
                data. Sentiment is unfortunately often disregarded; John Maynard
                Keynes is often quotes as saying: “Markets can remain irrational
                longer than you can remain solvent.” The supposed irrationality
                of the markets is a byproduct of the market participants’
                sentiments. The better we can understand it, the better our
                investment decision become. Furter, the only way we can
                understand it is by giving market participants’ a platform full
                dedicated to them.
              </p>
            </div>
            {/* <!-- Section-4-1 ends --> */}
            {/* <!-- Reference starts --> */}
            <div id="section-References" className="my-5 ms-5">
              <h2 className="text-3xl text-black font-semibold dark:!text-white">
                References:{" "}
              </h2>
              <div className="row mt-3">
                <div className="col-sm-12 col-md-6 Ref_end">
                  <p className="fw-bold text-dark dark:!text-white">
                    [1]. Cable News Network. (n.d.). AAPL. CNNMoney.
                  </p>
                  <a className="dark:!text-white">
                    https://money.cnn.com/quote/
                    <br />
                    forecast/forecast.html?symb=AAPL{" "}
                  </a>
                  <p className="fw-bold text-dark mt-5 dark:!text-white">
                    [3]. Cable News Network. (n.d.). GOOG. CNNMoney.
                  </p>
                  <a className="dark:!text-white">
                    https://money.cnn.com/quote/M
                    <br />
                    forecast/forecast.html?symb=GOOG{" "}
                  </a>
                  <p className="fw-bold text-dark mt-5 dark:!text-white">
                    [5]. Cable News Network. (n.d.). TSLA. CNNMoney.
                  </p>
                  <a className="dark:!text-white">
                    https://money.cnn.com/quote/
                    <br />
                    forecast/forecast.html?symb=TSLA{" "}
                  </a>
                </div>
                <div className="col-sm-12 col-md-6 Ref_end">
                  <p className="fw-bold text-dark dark:!text-white">
                    [2]. Cable News Network. (n.d.). MSFT. CNNMoney.{" "}
                  </p>
                  <a className="dark:!text-white">
                    https://money.cnn.com/quote/
                    <br />
                    forecast/forecast.html?symb=MSFT{" "}
                  </a>
                  <p className="fw-bold text-dark mt-5 dark:!text-white">
                    [4]. Cable News Network. (n.d.). AMZN. CNNMoney.
                  </p>
                  <a className="dark:!text-white">
                    https://money.cnn.com/quote/
                    <br />
                    forecast/forecast.html?symb=AMZN
                  </a>
                  <p className="fw-bold text-dark mt-5 dark:!text-white">
                    [6]. Market prices definition. Nasdaq. (n.d.).
                  </p>
                  <a className="dark:!text-white">
                    {" "}
                    https://www.nasdaq.com/
                    <br />
                    glossary/m/market-prices{" "}
                  </a>
                </div>
                <div className="col-sm-12 col-md-10 Ref_end">
                  <p className="fw-bold text-dark mt-5 dark:!text-white ">
                    [7]. Thompson, S. K. (1987). Sample Size
                    <br /> for Estimating Multinomial Proportions.
                    <br /> The American Statistician, 41(1), 42–46.{" "}
                  </p>
                  <a className="dark:!text-white">
                    {" "}
                    https://doi.org/10.2307/2684318{" "}
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Reference ends --> */}
          </div>
        </div>
      </div>
      {/* <!-- table of content ends --> */}

      <div className="bg-white dark:!bg-black mt-20 flex justify-center items-center">
        <img src={image5} alt="icon" className="h-10 w-10 " />
        <p className="dark:text-white">
          ©2024finulab llc. all rights reserved.
        </p>
      </div>
    </>
  );
};

export default Finuxwhitepaper;
