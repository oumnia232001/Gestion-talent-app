import React, { useState, useEffect } from 'react';
import { Button } from '@/components/custom/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../../ui/card.jsx';
import { Search } from '../../search.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../ui/tabs.jsx';
import { TopNav } from '../../top-nav.jsx';
import { UserNav } from '../../user-nav.jsx';
import { Layout, LayoutBody, LayoutHeader } from '../../custom/layout.jsx';
import { RecentOffres } from './components/recent-Offres.jsx'; // Importez votre composant RecentCandidats
import { Overview } from './components/overview.jsx';

export default function Dashboard() {
    const [totalOffers, setTotalOffers] = useState(0);
    const [totalCandidats, setTotalCandidats] = useState(0);
    const [recentOffres, setRecentOffres] = useState([])

    const fetchTotalOffers = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/offres/count');
            const data = await response.json();
            setTotalOffers(data.count);
        } catch (error) {
            console.error('Error fetching total offers:', error);
        }
    };

    const fetchTotalCandidats = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/candidats/count');
            const data = await response.json();
            setTotalCandidats(data.count);
        } catch (error) {
            console.error('Error fetching total candidats:', error);
        }
    };
    const fetchRecentOffres = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/offres');
            const data = await response.json();
            setRecentOffres(data?.data); // Mettre à jour la liste des offres récentes
        } catch (error) {
           
        }
    };

   

    useEffect(() => {
        fetchTotalOffers();
        fetchTotalCandidats();
        fetchRecentOffres();
    
    }, []);

    return (
        <Layout>
            <LayoutHeader>
                <TopNav links={topNav} />
                <div className='ml-auto flex items-center space-x-4'>
                    <Search />
                </div>
            </LayoutHeader>
            <LayoutBody className='space-y-4'>
                <div className='flex items-center justify-between space-y-2'>
                    <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
                        Dashboard
                    </h1>
                    <div className='flex items-center space-x-2'>
                        <Button>Download</Button>
                    </div>
                </div>
                <Tabs orientation='vertical' defaultValue='overview' className='space-y-4'>
                   
                        <TabsList>
                            <TabsTrigger value='overview'>Overview</TabsTrigger>
                        </TabsList>
                 
                    <TabsContent value='overview' className='space-y-4'>
                        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
                            <Card>
                                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                    <CardTitle className='text-sm font-medium'>
                                        Total Offers
                                    </CardTitle>
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='h-4 w-4 text-muted-foreground'>
                                        <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className='text-2xl font-bold'>{totalOffers}</div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                    <CardTitle className='text-sm font-medium'>
                                        Total Candidats
                                    </CardTitle>
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='h-4 w-4 text-muted-foreground'>
                                        <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
                                        <circle cx='9' cy='7' r='4' />
                                        <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className='text-2xl font-bold'>{totalCandidats}</div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                    <CardTitle className='text-sm font-medium'>
                                        Active Now
                                    </CardTitle>
                                    <svg
                                        xmlns='http://www.w3.org/2000/svg'
                                        viewBox='0 0 24 24'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        className='h-4 w-4 text-muted-foreground'
                                    >
                                        <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                                    </svg>
                                </CardHeader>
                                <CardContent>
                                    <div className='text-2xl font-bold'>+573</div>
                                    <p className='text-xs text-muted-foreground'>
                                        +201 since last hour
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
                            <Card className='col-span-1 lg:col-span-4'>
                                <CardHeader>
                                    <CardTitle>Overview</CardTitle>
                                </CardHeader>
                                <CardContent className='pl-2'>
                                    <Overview />
                                </CardContent>
                            </Card>
                            <Card className='col-span-1 lg:col-span-3'>
                                <CardHeader>
                                    <CardTitle>Recent Offers</CardTitle>
                                   
                                </CardHeader>
                                <CardContent>
                                <RecentOffres offres={recentOffres} /> {/* Passer les offres récentes au composant RecentOffres */}
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </LayoutBody>
        </Layout>
    );
}

const topNav = [
    {
        title: '',
        href: 'dashboard/overview',
        isActive: true,
    },
];