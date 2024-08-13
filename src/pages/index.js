import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';


export default function Home() {
     const {siteConfig} = useDocusaurusContext();
     return (

          <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">

               <main className="front_landing">

                    <div className="front_header">

                         <h1 className="front_header_title">Kadena Documentation</h1>

                         <span className="front_header_excerpt">Wecome to our developer docs, a comprehensive resource for building with our blockchain. Here, you'll find everything you need to accelerate your development process, from API references to best practices and detailed tutorials.</span>

                         <a className="front_header_cta" href="./start">Get Started</a>

                    </div>

                    <div className="front_main">

                         <ul className="front_main_options">

                              <li className="front_main_option">

                                   <a className="front_main_option_title" href="./intro/why-kadena">Introduction</a>

                                   <span className="front_main_option_summary">Start here to learn the basics, including blockchain fundamentals and the core concepts of the Kadena network.</span>

                              </li>

                              <li className="front_main_option">

                                   <a className="front_main_option_title" href="./pact/reference">Pact</a>

                                   <span className="front_main_option_summary">Pact is an open-source, Turing-incomplete smart contract language. Pact focuses on facilitating transactional logic with the optimal mix of functionality in authorization, data management, and workflow.</span>

                              </li>

                              <li className="front_main_option">

                                   <a className="front_main_option_title" href="./api">API</a>

                                   <span className="front_main_option_summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>

                              </li>


                              <li className="front_main_option">

                                   <a className="front_main_option_title" href="./guides">How-To Guides</a>

                                   <span className="front_main_option_summary">Step-by-step instructions to offer clear and actionable insights to enhance your development experience.</span>

                              </li>

                              <li className="front_main_option">

                                   <a className="front_main_option_title" href="./install">Installation</a>

                                   <span className="front_main_option_summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>

                              </li>

                              <li className="front_main_option">

                                   <a className="front_main_option_title" href="./resources">Resources</a>

                                   <span className="front_main_option_summary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>

                              </li>

                         </ul>

                    </div>

               </main>

          </Layout>

     );
}