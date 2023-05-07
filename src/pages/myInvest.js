
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from "../components/Common/Navbar/navbar";
import Footer from '../components/Common/Footer/footer';
import AddInvestment from "./addInvestment"
import MyInvestmentDetails from '../components/myInvestmentDetails';
import { Button, Form } from 'react-bootstrap';
import BreadcrumbShapes from "../components/Common/BreadcrumbShapes";
import Loading from "../components/Common/Loading";
// récupérer le token depuis localStorage
var user = JSON.parse( localStorage.getItem('user') );


function MyInvest() {
	const [investments,setInvestments]=useState([])
	const [count ,setCount]=useState(0) ;
	const [Stat, setStat] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [ListProjects, setListProjects] = useState({});

	let LoggedInUser = JSON.parse( localStorage.getItem('user') );
	useEffect(() => {
		const getStat = async () => {
			setIsLoading(true);
			try {
				const response = await axios.get(`/investment/statsInvestmentByUserId/${LoggedInUser.id}`);
				const Stats = response.data;
				console.log(Stats)
				setStat(Stats);
			} catch (error) {
				console.error(error);
			}
			setIsLoading(false);
		};

		getStat();
	}, []);
	useEffect(() => {
		const getListProjects = async () => {
			setIsLoading(true);
			try {
				const response = await axios.get(`/investment/projectInvestedInByUserId/${LoggedInUser.id}`);
				const ListProjects = response.data;
				console.log(ListProjects)
				setListProjects(ListProjects);
			} catch (error) {
				console.error(error);
			}
			setIsLoading(false);
		};

		getListProjects();
	}, []);


	const fetchData = async () => {
		const token = localStorage.getItem('token'); // Récupère le token stocké dans le local storage du navigateur
		setIsLoading(true);
		const response = await axios.get('/investment/all'
			, {
				headers: {'Authorization': `Bearer ${user.token}`},
			}
		)
		setInvestments(response.data)
		console.log(response.data);
		setIsLoading(false);
	}

	/* find all users */
	useEffect(()=>{
		const fetchData = async () => {
			setIsLoading(true);
			const response = await axios.get('/investment/all', {
				headers: {'Authorization': `Bearer ${user.token}`},
			})
			setInvestments(response.data)
			console.log(response.data);
			setIsLoading(false);
			setCount(count+1)
		}
		fetchData()
	},[])
	if (isLoading) {
		return <Loading/>;
	}


	return (
		<div>
			<Navbar />

			<section className="page-header bg-tertiary">

				<BreadcrumbShapes></BreadcrumbShapes>




				<h1 style={{ textAlign: "center" }}>Investor Dashboard</h1>
				<div style={{marginTop:"2%"}}>
					<div className="row justify-content-md-center">
						<div className="col-lg-5 mb-5 mb-lg-0">
							<p className="text-primary fw-bold mb-3">Info</p>
							<p>On this page, you can see all the investments you've made on projects. If your offer is still pending, you can communicate with the project creator via our chat or other means to discuss the terms of your investment. Please note that the funds transaction cannot be made through our website, so you should arrange to transfer the funds in real life or use another website that offers a secure payment system. Once the project creator accepts your offer and changes the status of your investment to "accepted," you'll have access to all the posts made by the project creator for that project.</p>
						</div>
					</div>


				</div>
			</section>

			<div className="row justify-content-md-center" style={{marginTop:"50px"}}>
				<div className="col-lg-3 mb-5 mb-lg-0">
					<div className="bg-success shadow rounded-lg p-4 sticky-top" style={{position: "relative",opacity:"60%"}}>
						<p style={{color: "white", fontSize: "32px",fontWeight:"bold", margin: 0}}>{Stat.countAcceptedInvestments}</p>
						<span style={{color: "white", fontSize: "20px"}}>Number of accepted investments</span>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{position: "absolute", top: 20, right: 20, width: "30px", height: "30px", fill: "white"}}><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
					</div>
				</div>
				<div className="col-lg-3 mb-5 mb-lg-0" >
					<div className="bg-body shadow rounded-lg p-4 sticky-top" style={{position: "relative"}}>
						<p style={{ color: "#343a40",fontSize: "32px",fontWeight:"bold", margin: 0}}>{Stat.countRejectedInvestments}</p>
						<span style={{color: "#343a40", fontSize: "20px"}}>Number of rejected investments</span>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{position: "absolute", top: 20, right: 20, width: "30px", height: "30px",fill:"#343a40"}}><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>
					</div>
				</div>
				<div className="col-lg-3 mb-5 mb-lg-0" >
					<div className="bg-body shadow rounded-lg p-4 sticky-top" style={{position: "relative"}}>
						<p style={{ color: "#343a40",fontSize: "32px",fontWeight:"bold", margin: 0}}>{Stat.countAmountInvested} $</p>
						<span style={{color: "#343a40", fontSize: "20px"}}>Total amount invested</span>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{position: "absolute", top: 20, right: 20, width: "30px", height: "30px",fill:"#343a40"}}><path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"/></svg>
					</div>
				</div>
			</div>
			<div style={{marginTop:"50px",marginBottom:"20px"}}>
				<div className="text-center">
					<h5> Projects I have invested in :</h5>
				</div>

				<div className="col-lg-12 d-flex justify-content-center align-items-center">
					{Object.keys(ListProjects).length === 0 && <p>No approved Investment yet</p>}
					<ul>
						{Object.keys(ListProjects).map((key) => (
							<li key={key}>{ListProjects[key]}</li>
						))}
					</ul>
				</div>
			</div>
			<section className="section core-value bg-tertiary">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="row position-relative gy-4">


								{investments.map(({montant,idUser,idProject,isValid,_id}) => (
									<MyInvestmentDetails key={_id}  id={_id}  montant={montant} idUser={idUser} idProject={idProject}  isValid={isValid} fetchData={fetchData} />

								))
								}

								<div className="has-shapes">
									<svg className="shape shape-1 text-primary" width="71" height="71" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8.50598 89.8686C8.17023 89.3091 7.83449 88.6376 7.49875 88.078L66.0305 0.336418C66.7019 0.448334 67.3734 0.560249 68.0449 0.560249L8.50598 89.8686Z" fill="currentColor" />
										<path d="M5.03787 83.2646C4.70213 82.5932 4.47829 81.9217 4.14255 81.2502L58.3096 -0.00032826C59.093 -0.000328191 59.7645 -0.000328132 60.5479 -0.000328064L5.03787 83.2646Z" fill="currentColor" />
										<path d="M16.9007 100.613C16.453 100.165 16.0053 99.7175 15.5577 99.2698L79.4613 3.47031C80.0209 3.69414 80.6924 3.91795 81.252 4.14178L16.9007 100.613Z" fill="currentColor" />
										<path d="M12.5352 95.5762C12.0876 95.0166 11.7518 94.5689 11.3042 94.0094L72.9695 1.45541C73.641 1.56732 74.2006 1.79115 74.8721 1.90306L12.5352 95.5762Z" fill="currentColor" />
										<path d="M0.00101471 55.5103C0.11293 54.1673 0.224831 52.9362 0.336747 51.5932L29.6586 7.72242C30.7777 7.05093 31.8969 6.49136 33.1279 5.93178L0.00101471 55.5103Z" fill="currentColor" />
										<path d="M26.1887 108.334C25.9649 108.223 25.7411 107.999 25.5172 107.887L91.2115 9.40136C91.4353 9.51328 91.6592 9.7371 91.883 9.84901C92.2188 10.0728 92.4426 10.2967 92.7783 10.4086L27.084 108.894C26.8602 108.67 26.5245 108.558 26.1887 108.334Z" fill="currentColor" />
										<path d="M114.042 81.0269C112.587 84.7201 110.685 88.4133 108.334 91.8827C105.984 95.3521 103.41 98.4857 100.5 101.396L114.042 81.0269Z" fill="currentColor" />
										<path d="M0.335842 66.7012C0.223927 65.6939 0.112026 64.7986 0.000110881 63.7914L40.7373 2.79753C41.6326 2.46179 42.6398 2.23796 43.5352 2.01413L0.335842 66.7012Z" fill="currentColor" />
										<path d="M2.23929 75.6538C2.01546 74.8704 1.79162 74.087 1.56779 73.3036L50.0271 0.558655C50.8105 0.446747 51.7059 0.334824 52.4893 0.222908L2.23929 75.6538Z" fill="currentColor" />
										<path d="M32.793 112.139C32.2335 111.915 31.6739 111.58 31.1143 111.244L96.4728 13.206C96.9205 13.6537 97.4801 13.9894 97.9277 14.4371L32.793 112.139Z" fill="currentColor" />
										<path d="M77.7822 115.161C76.8868 115.497 75.8796 115.72 74.9843 116.056L117.848 51.8168C117.96 52.824 118.072 53.7193 118.184 54.7266L77.7822 115.161Z" fill="currentColor" />
										<path d="M68.493 117.512C67.7096 117.624 66.8143 117.736 66.0309 117.848L116.057 42.8644C116.281 43.6478 116.505 44.4312 116.729 45.3265L68.493 117.512Z" fill="currentColor" />
										<path d="M60.0992 118.294C59.3158 118.294 58.6443 118.294 57.8609 118.294L113.259 35.2533C113.595 35.9248 113.819 36.5963 114.154 37.2678L60.0992 118.294Z" fill="currentColor" />
										<path d="M21.8245 105.087C21.3768 104.64 20.8172 104.304 20.3696 103.856L85.6162 6.15427C86.1758 6.37809 86.7354 6.71384 87.2949 7.04959L21.8245 105.087Z" fill="currentColor" />
										<path d="M89.0856 110.124C87.9665 110.795 86.7354 111.467 85.6162 112.026L118.184 63.1194C118.072 64.4624 117.96 65.8054 117.736 67.0364L89.0856 110.124Z" fill="currentColor" />
										<path d="M3.69339 38.2759C5.2602 34.135 7.27468 30.1061 9.84873 26.189C12.4228 22.3839 15.3326 18.9145 18.5781 15.8928L3.69339 38.2759Z" fill="currentColor" />
										<path d="M52.49 117.848C51.8185 117.736 51.147 117.736 50.4755 117.624L109.791 28.5392C110.126 29.0988 110.462 29.7703 110.798 30.3299L52.49 117.848Z" fill="currentColor" />
										<path d="M38.9475 114.712C38.388 114.489 37.7165 114.265 37.1569 114.041L101.396 17.6818C101.844 18.1295 102.292 18.5771 102.739 19.0248L38.9475 114.712Z" fill="currentColor" />
										<path d="M45.4392 116.728C44.7677 116.616 44.2081 116.392 43.5366 116.28L105.873 22.8306C106.321 23.3902 106.657 23.8378 107.105 24.3974L45.4392 116.728Z" fill="currentColor" />
									</svg>
									<svg className="shape shape-2 text-primary" width="100" height="100" viewBox="0 0 119 119" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8.50598 89.8686C8.17023 89.3091 7.83449 88.6376 7.49875 88.078L66.0305 0.336418C66.7019 0.448334 67.3734 0.560249 68.0449 0.560249L8.50598 89.8686Z" fill="currentColor" />
										<path d="M5.03787 83.2646C4.70213 82.5932 4.47829 81.9217 4.14255 81.2502L58.3096 -0.00032826C59.093 -0.000328191 59.7645 -0.000328132 60.5479 -0.000328064L5.03787 83.2646Z" fill="currentColor" />
										<path d="M16.9007 100.613C16.453 100.165 16.0053 99.7175 15.5577 99.2698L79.4613 3.47031C80.0209 3.69414 80.6924 3.91795 81.252 4.14178L16.9007 100.613Z" fill="currentColor" />
										<path d="M12.5352 95.5762C12.0876 95.0166 11.7518 94.5689 11.3042 94.0094L72.9695 1.45541C73.641 1.56732 74.2006 1.79115 74.8721 1.90306L12.5352 95.5762Z" fill="currentColor" />
										<path d="M0.00101471 55.5103C0.11293 54.1673 0.224831 52.9362 0.336747 51.5932L29.6586 7.72242C30.7777 7.05093 31.8969 6.49136 33.1279 5.93178L0.00101471 55.5103Z" fill="currentColor" />
										<path d="M26.1887 108.334C25.9649 108.223 25.7411 107.999 25.5172 107.887L91.2115 9.40136C91.4353 9.51328 91.6592 9.7371 91.883 9.84901C92.2188 10.0728 92.4426 10.2967 92.7783 10.4086L27.084 108.894C26.8602 108.67 26.5245 108.558 26.1887 108.334Z" fill="currentColor" />
										<path d="M114.042 81.0269C112.587 84.7201 110.685 88.4133 108.334 91.8827C105.984 95.3521 103.41 98.4857 100.5 101.396L114.042 81.0269Z" fill="currentColor" />
										<path d="M0.335842 66.7012C0.223927 65.6939 0.112026 64.7986 0.000110881 63.7914L40.7373 2.79753C41.6326 2.46179 42.6398 2.23796 43.5352 2.01413L0.335842 66.7012Z" fill="currentColor" />
										<path d="M2.23929 75.6538C2.01546 74.8704 1.79162 74.087 1.56779 73.3036L50.0271 0.558655C50.8105 0.446747 51.7059 0.334824 52.4893 0.222908L2.23929 75.6538Z" fill="currentColor" />
										<path d="M32.793 112.139C32.2335 111.915 31.6739 111.58 31.1143 111.244L96.4728 13.206C96.9205 13.6537 97.4801 13.9894 97.9277 14.4371L32.793 112.139Z" fill="currentColor" />
										<path d="M77.7822 115.161C76.8868 115.497 75.8796 115.72 74.9843 116.056L117.848 51.8168C117.96 52.824 118.072 53.7193 118.184 54.7266L77.7822 115.161Z" fill="currentColor" />
										<path d="M68.493 117.512C67.7096 117.624 66.8143 117.736 66.0309 117.848L116.057 42.8644C116.281 43.6478 116.505 44.4312 116.729 45.3265L68.493 117.512Z" fill="currentColor" />
										<path d="M60.0992 118.294C59.3158 118.294 58.6443 118.294 57.8609 118.294L113.259 35.2533C113.595 35.9248 113.819 36.5963 114.154 37.2678L60.0992 118.294Z" fill="currentColor" />
										<path d="M21.8245 105.087C21.3768 104.64 20.8172 104.304 20.3696 103.856L85.6162 6.15427C86.1758 6.37809 86.7354 6.71384 87.2949 7.04959L21.8245 105.087Z" fill="currentColor" />
										<path d="M89.0856 110.124C87.9665 110.795 86.7354 111.467 85.6162 112.026L118.184 63.1194C118.072 64.4624 117.96 65.8054 117.736 67.0364L89.0856 110.124Z" fill="currentColor" />
										<path d="M3.69339 38.2759C5.2602 34.135 7.27468 30.1061 9.84873 26.189C12.4228 22.3839 15.3326 18.9145 18.5781 15.8928L3.69339 38.2759Z" fill="currentColor" />
										<path d="M52.49 117.848C51.8185 117.736 51.147 117.736 50.4755 117.624L109.791 28.5392C110.126 29.0988 110.462 29.7703 110.798 30.3299L52.49 117.848Z" fill="currentColor" />
										<path d="M38.9475 114.712C38.388 114.489 37.7165 114.265 37.1569 114.041L101.396 17.6818C101.844 18.1295 102.292 18.5771 102.739 19.0248L38.9475 114.712Z" fill="currentColor" />
										<path d="M45.4392 116.728C44.7677 116.616 44.2081 116.392 43.5366 116.28L105.873 22.8306C106.321 23.3902 106.657 23.8378 107.105 24.3974L45.4392 116.728Z" fill="currentColor" />
									</svg>
								</div>
							</div>
						</div>
						<div className="col-lg-6 mt-5 mt-lg-0">

							<div className="section-title ps-0 ps-lg-5">
								<p className="text-primary fw-bold mb-3">Kaddem</p>
								<h1 >My Investments Offers</h1>
								<div className="content">
									<p>On this part, you can see the list of investments you've made on projects, including the amount you offered, the project name, and the status of your offer.Note that the status of the offer can be "accepted", "pending" or "refused" and the status depend on the response of the project creator</p>

								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	)
}

export default MyInvest