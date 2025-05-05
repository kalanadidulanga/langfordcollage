"use client";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Select from 'react-select';
import axios from "axios";
import toast from "react-hot-toast";

function RequestACource() {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const BASE_EMAIL = process.env.NEXT_PUBLIC_BASE_EMAIL;

    const [courses, setCourses] = useState([]);

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [course, setCourse] = useState("");

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            ".request-left",
            { opacity: 0, x: -50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".request-section",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

        gsap.fromTo(
            ".request-right",
            { opacity: 0, x: 50 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power3.out",
                scrollTrigger: {
                    trigger: ".request-section",
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play reverse play reverse",
                    once: false,
                }
            }
        );

    }, []);

    useEffect(() => {
        loadCourses();
    }, []);

    const loadCourses = async () => {

        try {
            const res = await axios.get(`${BASE_URL}/api/getAllCources`);

            if (res?.data?.status) {
                setCourses(res.data.data);
            } else {
                setCourses([]);
            }
        } catch (error) {
            setCourses([]);
        }

    }

    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderColor: state.isFocused ? '#E2231A' : '#e2e8f0',
            boxShadow: state.isFocused ? '0 0 0 0.5px #E2231A' : 'none',
            '&:hover': {
                borderColor: '#E2231A',
            },
            outline: 'none',
            height: '45px',
        }),
    };

    const countries = [
        { value: 'Afghanistan', label: 'Afghanistan' },
        { value: 'Albania', label: 'Albania' },
        { value: 'Algeria', label: 'Algeria' },
        { value: 'American Samoa', label: 'American Samoa' },
        { value: 'Andorra', label: 'Andorra' },
        { value: 'Angola', label: 'Angola' },
        { value: 'Anguilla', label: 'Anguilla' },
        { value: 'Antarctica', label: 'Antarctica' },
        { value: 'Antigua and Barbuda', label: 'Antigua and Barbuda' },
        { value: 'Argentina', label: 'Argentina' },
        { value: 'Armenia', label: 'Armenia' },
        { value: 'Aruba', label: 'Aruba' },
        { value: 'Australia', label: 'Australia' },
        { value: 'Austria', label: 'Austria' },
        { value: 'Azerbaijan', label: 'Azerbaijan' },
        { value: 'Bahamas', label: 'Bahamas' },
        { value: 'Bahrain', label: 'Bahrain' },
        { value: 'Bangladesh', label: 'Bangladesh' },
        { value: 'Barbados', label: 'Barbados' },
        { value: 'Belarus', label: 'Belarus' },
        { value: 'Belgium', label: 'Belgium' },
        { value: 'Belize', label: 'Belize' },
        { value: 'Benin', label: 'Benin' },
        { value: 'Bermuda', label: 'Bermuda' },
        { value: 'Bhutan', label: 'Bhutan' },
        { value: 'Bolivia', label: 'Bolivia' },
        { value: 'Bosnia and Herzegovina', label: 'Bosnia and Herzegovina' },
        { value: 'Botswana', label: 'Botswana' },
        { value: 'Bouvet Island', label: 'Bouvet Island' },
        { value: 'Brazil', label: 'Brazil' },
        { value: 'British Indian Ocean Territory', label: 'British Indian Ocean Territory' },
        { value: 'Brunei Darussalam', label: 'Brunei Darussalam' },
        { value: 'Bulgaria', label: 'Bulgaria' },
        { value: 'Burkina Faso', label: 'Burkina Faso' },
        { value: 'Burundi', label: 'Burundi' },
        { value: 'Cambodia', label: 'Cambodia' },
        { value: 'Cameroon', label: 'Cameroon' },
        { value: 'Canada', label: 'Canada' },
        { value: 'Cape Verde', label: 'Cape Verde' },
        { value: 'Cayman Islands', label: 'Cayman Islands' },
        { value: 'Central African Republic', label: 'Central African Republic' },
        { value: 'Chad', label: 'Chad' },
        { value: 'Chile', label: 'Chile' },
        { value: 'China', label: 'China' },
        { value: 'Christmas Island', label: 'Christmas Island' },
        { value: 'Cocos (Keeling) Islands', label: 'Cocos (Keeling) Islands' },
        { value: 'Colombia', label: 'Colombia' },
        { value: 'Comoros', label: 'Comoros' },
        { value: 'Congo', label: 'Congo' },
        { value: 'Congo (Democratic Republic)', label: 'Congo (Democratic Republic)' },
        { value: 'Cook Islands', label: 'Cook Islands' },
        { value: 'Costa Rica', label: 'Costa Rica' },
        { value: 'Croatia', label: 'Croatia' },
        { value: 'Cuba', label: 'Cuba' },
        { value: 'Cyprus', label: 'Cyprus' },
        { value: 'Czech Republic', label: 'Czech Republic' },
        { value: 'Côte d\'Ivoire', label: 'Côte d\'Ivoire' },
        { value: 'Denmark', label: 'Denmark' },
        { value: 'Djibouti', label: 'Djibouti' },
        { value: 'Dominica', label: 'Dominica' },
        { value: 'Dominican Republic', label: 'Dominican Republic' },
        { value: 'Ecuador', label: 'Ecuador' },
        { value: 'Egypt', label: 'Egypt' },
        { value: 'El Salvador', label: 'El Salvador' },
        { value: 'Equatorial Guinea', label: 'Equatorial Guinea' },
        { value: 'Eritrea', label: 'Eritrea' },
        { value: 'Estonia', label: 'Estonia' },
        { value: 'Eswatini', label: 'Eswatini' },
        { value: 'Ethiopia', label: 'Ethiopia' },
        { value: 'Falkland Islands', label: 'Falkland Islands' },
        { value: 'Faroe Islands', label: 'Faroe Islands' },
        { value: 'Fiji', label: 'Fiji' },
        { value: 'Finland', label: 'Finland' },
        { value: 'France', label: 'France' },
        { value: 'French Guiana', label: 'French Guiana' },
        { value: 'French Polynesia', label: 'French Polynesia' },
        { value: 'French Southern Territories', label: 'French Southern Territories' },
        { value: 'Gabon', label: 'Gabon' },
        { value: 'Gambia', label: 'Gambia' },
        { value: 'Georgia', label: 'Georgia' },
        { value: 'Germany', label: 'Germany' },
        { value: 'Ghana', label: 'Ghana' },
        { value: 'Gibraltar', label: 'Gibraltar' },
        { value: 'Greece', label: 'Greece' },
        { value: 'Greenland', label: 'Greenland' },
        { value: 'Grenada', label: 'Grenada' },
        { value: 'Guadeloupe', label: 'Guadeloupe' },
        { value: 'Guam', label: 'Guam' },
        { value: 'Guatemala', label: 'Guatemala' },
        { value: 'Guernsey', label: 'Guernsey' },
        { value: 'Guinea', label: 'Guinea' },
        { value: 'Guinea-Bissau', label: 'Guinea-Bissau' },
        { value: 'Guyana', label: 'Guyana' },
        { value: 'Haiti', label: 'Haiti' },
        { value: 'Heard Island and McDonald Islands', label: 'Heard Island and McDonald Islands' },
        { value: 'Honduras', label: 'Honduras' },
        { value: 'Hong Kong', label: 'Hong Kong' },
        { value: 'Hungary', label: 'Hungary' },
        { value: 'Iceland', label: 'Iceland' },
        { value: 'India', label: 'India' },
        { value: 'Indonesia', label: 'Indonesia' },
        { value: 'Iran', label: 'Iran' },
        { value: 'Iraq', label: 'Iraq' },
        { value: 'Ireland', label: 'Ireland' },
        { value: 'Israel', label: 'Israel' },
        { value: 'Italy', label: 'Italy' },
        { value: 'Jamaica', label: 'Jamaica' },
        { value: 'Japan', label: 'Japan' },
        { value: 'Jersey', label: 'Jersey' },
        { value: 'Jordan', label: 'Jordan' },
        { value: 'Kazakhstan', label: 'Kazakhstan' },
        { value: 'Kenya', label: 'Kenya' },
        { value: 'Kiribati', label: 'Kiribati' },
        { value: 'Korea (North)', label: 'Korea (North)' },
        { value: 'Korea (South)', label: 'Korea (South)' },
        { value: 'Kuwait', label: 'Kuwait' },
        { value: 'Kyrgyzstan', label: 'Kyrgyzstan' },
        { value: 'Laos', label: 'Laos' },
        { value: 'Latvia', label: 'Latvia' },
        { value: 'Lebanon', label: 'Lebanon' },
        { value: 'Lesotho', label: 'Lesotho' },
        { value: 'Liberia', label: 'Liberia' },
        { value: 'Libya', label: 'Libya' },
        { value: 'Liechtenstein', label: 'Liechtenstein' },
        { value: 'Lithuania', label: 'Lithuania' },
        { value: 'Luxembourg', label: 'Luxembourg' },
        { value: 'Macau', label: 'Macau' },
        { value: 'Madagascar', label: 'Madagascar' },
        { value: 'Malawi', label: 'Malawi' },
        { value: 'Malaysia', label: 'Malaysia' },
        { value: 'Maldives', label: 'Maldives' },
        { value: 'Mali', label: 'Mali' },
        { value: 'Malta', label: 'Malta' },
        { value: 'Marshall Islands', label: 'Marshall Islands' },
        { value: 'Martinique', label: 'Martinique' },
        { value: 'Mauritania', label: 'Mauritania' },
        { value: 'Mauritius', label: 'Mauritius' },
        { value: 'Mayotte', label: 'Mayotte' },
        { value: 'Mexico', label: 'Mexico' },
        { value: 'Micronesia', label: 'Micronesia' },
        { value: 'Moldova', label: 'Moldova' },
        { value: 'Monaco', label: 'Monaco' },
        { value: 'Mongolia', label: 'Mongolia' },
        { value: 'Montenegro', label: 'Montenegro' },
        { value: 'Montserrat', label: 'Montserrat' },
        { value: 'Morocco', label: 'Morocco' },
        { value: 'Mozambique', label: 'Mozambique' },
        { value: 'Myanmar', label: 'Myanmar' },
        { value: 'Namibia', label: 'Namibia' },
        { value: 'Nauru', label: 'Nauru' },
        { value: 'Nepal', label: 'Nepal' },
        { value: 'Netherlands', label: 'Netherlands' },
        { value: 'New Caledonia', label: 'New Caledonia' },
        { value: 'New Zealand', label: 'New Zealand' },
        { value: 'Nicaragua', label: 'Nicaragua' },
        { value: 'Niger', label: 'Niger' },
        { value: 'Nigeria', label: 'Nigeria' },
        { value: 'Niue', label: 'Niue' },
        { value: 'Norfolk Island', label: 'Norfolk Island' },
        { value: 'Northern Mariana Islands', label: 'Northern Mariana Islands' },
        { value: 'Norway', label: 'Norway' },
        { value: 'Oman', label: 'Oman' },
        { value: 'Pakistan', label: 'Pakistan' },
        { value: 'Palau', label: 'Palau' },
        { value: 'Panama', label: 'Panama' },
        { value: 'Papua New Guinea', label: 'Papua New Guinea' },
        { value: 'Paraguay', label: 'Paraguay' },
        { value: 'Peru', label: 'Peru' },
        { value: 'Philippines', label: 'Philippines' },
        { value: 'Pitcairn', label: 'Pitcairn' },
        { value: 'Poland', label: 'Poland' },
        { value: 'Portugal', label: 'Portugal' },
        { value: 'Puerto Rico', label: 'Puerto Rico' },
        { value: 'Qatar', label: 'Qatar' },
        { value: 'Réunion', label: 'Réunion' },
        { value: 'Romania', label: 'Romania' },
        { value: 'Russian Federation', label: 'Russian Federation' },
        { value: 'Rwanda', label: 'Rwanda' },
        { value: 'Saint Barthélemy', label: 'Saint Barthélemy' },
        { value: 'Saint Helena', label: 'Saint Helena' },
        { value: 'Saint Kitts and Nevis', label: 'Saint Kitts and Nevis' },
        { value: 'Saint Lucia', label: 'Saint Lucia' },
        { value: 'Saint Martin', label: 'Saint Martin' },
        { value: 'Saint Pierre and Miquelon', label: 'Saint Pierre and Miquelon' },
        { value: 'Saint Vincent and the Grenadines', label: 'Saint Vincent and the Grenadines' },
        { value: 'Samoa', label: 'Samoa' },
        { value: 'San Marino', label: 'San Marino' },
        { value: 'Sao Tome and Principe', label: 'Sao Tome and Principe' },
        { value: 'Saudi Arabia', label: 'Saudi Arabia' },
        { value: 'Senegal', label: 'Senegal' },
        { value: 'Serbia', label: 'Serbia' },
        { value: 'Seychelles', label: 'Seychelles' },
        { value: 'Sierra Leone', label: 'Sierra Leone' },
        { value: 'Singapore', label: 'Singapore' },
        { value: 'Sint Maarten', label: 'Sint Maarten' },
        { value: 'Slovakia', label: 'Slovakia' },
        { value: 'Slovenia', label: 'Slovenia' },
        { value: 'Solomon Islands', label: 'Solomon Islands' },
        { value: 'Somalia', label: 'Somalia' },
        { value: 'South Africa', label: 'South Africa' },
        { value: 'South Georgia and the South Sandwich Islands', label: 'South Georgia and the South Sandwich Islands' },
        { value: 'South Sudan', label: 'South Sudan' },
        { value: 'Spain', label: 'Spain' },
        { value: 'Sri Lanka', label: 'Sri Lanka' },
        { value: 'Sudan', label: 'Sudan' },
        { value: 'Suriname', label: 'Suriname' },
        { value: 'Svalbard and Jan Mayen', label: 'Svalbard and Jan Mayen' },
        { value: 'Sweden', label: 'Sweden' },
        { value: 'Switzerland', label: 'Switzerland' },
        { value: 'Syrian Arab Republic', label: 'Syrian Arab Republic' },
        { value: 'Taiwan', label: 'Taiwan' },
        { value: 'Tajikistan', label: 'Tajikistan' },
        { value: 'Tanzania (United Republic of)', label: 'Tanzania (United Republic of)' },
        { value: 'Thailand', label: 'Thailand' },
        { value: 'Timor-Leste', label: 'Timor-Leste' },
        { value: 'Togo', label: 'Togo' },
        { value: 'Tokelau', label: 'Tokelau' },
        { value: 'Tonga', label: 'Tonga' },
        { value: 'Trinidad and Tobago', label: 'Trinidad and Tobago' },
        { value: 'Tunisia', label: 'Tunisia' },
        { value: 'Turkey', label: 'Turkey' },
        { value: 'Turkmenistan', label: 'Turkmenistan' },
        { value: 'Tuvalu', label: 'Tuvalu' },
        { value: 'Uganda', label: 'Uganda' },
        { value: 'Ukraine', label: 'Ukraine' },
        { value: 'United Arab Emirates', label: 'United Arab Emirates' },
        { value: 'United Kingdom', label: 'United Kingdom' },
        { value: 'United States of America', label: 'United States of America' },
        { value: 'Uruguay', label: 'Uruguay' },
        { value: 'Uzbekistan', label: 'Uzbekistan' },
        { value: 'Vanuatu', label: 'Vanuatu' },
        { value: 'Venezuela (Bolivarian Republic of)', label: 'Venezuela (Bolivarian Republic of)' },
        { value: 'Viet Nam', label: 'Viet Nam' },
        { value: 'Western Sahara', label: 'Western Sahara' },
        { value: 'Yemen', label: 'Yemen' },
        { value: 'Zambia', label: 'Zambia' },
        { value: 'Zimbabwe', label: 'Zimbabwe' },
    ];

    const handleChange = (selectedOption) => {
        setCountry(selectedOption?.value);
    };
    const handleChange1 = (selectedOption) => {
        setCourse(selectedOption?.value);
    };

    const handleRequest = async () => {
        setLoading(true);
        try {

            const mailcontent = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
 <head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>New Template</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<noscript>
         <xml>
           <o:OfficeDocumentSettings>
           <o:AllowPNG></o:AllowPNG>
           <o:PixelsPerInch>96</o:PixelsPerInch>
           </o:OfficeDocumentSettings>
         </xml>
      </noscript>
<![endif]--><!--[if mso]><xml>
    <w:WordDocument xmlns:w="urn:schemas-microsoft-com:office:word">
      <w:DontUseAdvancedTypographyReadingMail/>
    </w:WordDocument>
    </xml><![endif]-->
  <style type="text/css">.rollover:hover .rollover-first {
  max-height:0px!important;
  display:none!important;
}
.rollover:hover .rollover-second {
  max-height:none!important;
  display:block!important;
}
.rollover span {
  font-size:0px;
}
u + .body img ~ div div {
  display:none;
}
#outlook a {
  padding:0;
}
span.MsoHyperlink,
span.MsoHyperlinkFollowed {
  color:inherit;
  mso-style-priority:99;
}
a.n {
  mso-style-priority:100!important;
  text-decoration:none!important;
}
a[x-apple-data-detectors],
#MessageViewBody a {
  color:inherit!important;
  text-decoration:none!important;
  font-size:inherit!important;
  font-family:inherit!important;
  font-weight:inherit!important;
  line-height:inherit!important;
}
.d {
  display:none;
  float:left;
  overflow:hidden;
  width:0;
  max-height:0;
  line-height:0;
  mso-hide:all;
}
@media only screen and (max-width:600px) { *[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important }  .z p { }   h1 { font-size:36px!important; text-align:left } h2 { font-size:26px!important; text-align:left } h3 { font-size:20px!important; text-align:left } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left }         .z p, .z a { font-size:14px!important }      .v, .v h1, .v h2, .v h3, .v h4, .v h5, .v h6 { text-align:left!important }  .t .rollover:hover .rollover-second, .u .rollover:hover .rollover-second, .v .rollover:hover .rollover-second { display:inline!important }        .g table, .h table, .i table, .g, .i, .h { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important }        .h-auto { height:auto!important } }
@media screen and (max-width:384px) {.mail-message-content { width:414px!important } }</style>
 </head>
 <body class="body" style="width:100%;height:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
  <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#FAFAFA"><!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#fafafa"></v:fill>
			</v:background>
		<![endif]-->
   <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FAFAFA">
     <tr>
      <td valign="top" style="padding:0;Margin:0">
       <table cellspacing="0" cellpadding="0" align="center" class="h" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
       </table>
       <table cellspacing="0" cellpadding="0" align="center" class="h" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
       </table>
       <table cellspacing="0" cellpadding="0" align="center" class="g" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" class="z" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;border-top:10px solid #5C68E2;width:600px;border-bottom:10px solid #5C68E2" role="none">
             <tr>
              <td background align="left" bgcolor="#fefdfd" style="padding:0;Margin:0;padding-top:20px;padding-right:20px;padding-left:20px;background-color:#fefdfd">
               <table width="100%" cellspacing="0" cellpadding="0" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                   <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"><h3 class="v" style="Margin:0;font-family:arial, 'helvetica neue', helvetica, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:20px;font-style:normal;font-weight:bold;line-height:24px;color:#5c68e2">Course Request,</h3></td>
                     </tr>
                     <tr>
                      <td align="left" style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><strong>Details:</strong></p>
                       <ul style="font-family:arial, 'helvetica neue', helvetica, sans-serif;padding:0px 0px 0px 40px;margin-top:15px;margin-bottom:15px">
                        <li style="color:#333333;margin:0px 0px 15px;font-size:14px"><p style="Margin:0;mso-line-height-rule:exactly;mso-margin-bottom-alt:15px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px;mso-margin-top-alt:15px"><strong>Name -</strong> ${fname} ${lname}</p></li>
                        <li style="color:#333333;margin:0px 0px 15px;font-size:14px"><strong>Email -</strong> ${email}</li>
                        <li style="color:#333333;margin:0px 0px 15px;font-size:14px"><strong>Mobile Number -</strong> ${phone}</li>
                        <li style="color:#333333;margin:0px 0px 15px;font-size:14px"><strong>Country -</strong> ${country}</li>
                        <li style="color:#333333;margin:0px 0px 15px;font-size:14px"><strong>Course -</strong> ${course}</li>
                       </ul><p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px"><br>Thank You.<br></p></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
       <table cellspacing="0" cellpadding="0" align="center" class="g" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
       </table></td>
     </tr>
   </table>
  </div>
 </body>
</html>`;

            const res = await axios.post(`${BASE_URL}/api/sendEmail`, {
                to: BASE_EMAIL,
                subject: "Course Request",
                html: mailcontent
            });

            if (res?.data?.status) {
                setLoading(false);
                toast.success("Request Sent Successfully.");
                resetForm();
            }


        } catch (error) {
            setLoading(false);
            toast.error("Something went wrong.");
            console.error(error);
            resetForm();
        }
    }

    const resetForm = () => {
        setFname("");
        setLname("");
        setEmail("");
        setPhone("");
        setCountry("");
        setCourse("");
    }

    return (
        <>
            <div className='w-full pb-10 pt-10 bg-[#F7FAFF] text-black px-[10vw] flex flex-col lg:flex-row items-start justify-start lg:justify-between lg:gap-32 gap-5 request-section capitalize'>
                <div className='w-full flex items-start flex-col lg:h-full'>
                    <div className="w-full lg:grid lg:grid-cols-2">
                        <div className="w-full flex items-start flex-col lg:h-full">
                            <span className="text-[6vw] lg:text-[3.5vw] font-sans font-bold capitalize">
                                Request a Course
                            </span>
                            <span className="text-[6vw] lg:text-[3.5vw] font-mono capitalize">
                                Prospectus
                            </span>
                        </div>
                        <div className="w-full h-full p-2">
                            <div className="border-b-2 h-[70%] border-gray-400 relative">
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex justify-center font-sans z-10'>
                        <div className='w-full  pt-10 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-5 font-normal text-[16px]'>
                            <div className='w-full flex flex-col gap-2 request-left'>
                                <span>First Name</span>
                                <input type="text" className='w-full rounded-lg outline-0 p-2 border border-[#E5E4E4] bg-white focus:border-2 focus:border-[#E2231A] hover:border-[#E2231A]'
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                />
                            </div>
                            <div className='w-full flex flex-col gap-2 request-right'>
                                <span>Last Name</span>
                                <input type="text"
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                    className='w-full rounded-lg outline-0 p-2 border border-[#E5E4E4] bg-white focus:border-2 focus:border-[#E2231A] hover:border-[#E2231A]' />
                            </div>
                            <div className='w-full flex flex-col gap-2 request-left'>
                                <span>Email Address</span>
                                <input type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='w-full rounded-lg outline-0 p-2 border border-[#E5E4E4] bg-white focus:border-2 focus:border-[#E2231A] hover:border-[#E2231A]' />
                            </div>
                            <div className='w-full flex flex-col gap-2 request-right'>
                                <span>Phone Number</span>
                                <input type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className='w-full rounded-lg outline-0 p-2 border border-[#E5E4E4] bg-white focus:border-2 focus:border-[#E2231A] hover:border-[#E2231A]' />
                            </div>
                            <div className='w-full flex flex-col gap-2 request-left'>
                                <span>Country</span>
                                <Select
                                    value={country ? { value: country, label: country } : null}
                                    options={countries}
                                    onChange={handleChange}
                                    placeholder="Select Country"
                                    styles={customStyles}
                                />
                            </div>
                            <div className='w-full flex flex-col gap-2 request-right'>
                                <span>Course</span>
                                <Select
                                    value={course ? { value: course, label: course } : null}
                                    options={courses?.map((course) => ({ value: course?.course_name, label: `${course?.course_name}` }))}
                                    onChange={handleChange1}
                                    placeholder="Select Course"
                                    styles={customStyles}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start justify-end w-full'>
                        <button className='btn bg-[#E2231A] hover:bg-[#ff0000] hover:shadow-md shadow-[#e2241aa6] text-white request-right flex gap-3 items-center disabled:bg-[#be4b4b] disabled:cursor-not-allowed'
                            onClick={handleRequest}
                            disabled={loading}
                        >
                            Send me my prospectus
                            {loading && (
                                <div className="animate-spin rounded-full h-4 w-4 border-b-3 border-white"></div>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default RequestACource;