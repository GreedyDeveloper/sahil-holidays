import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Grid,
    Chip,
    Stack,
    Tooltip,
    IconButton,
    Dialog,
    DialogTitle,
    DialogContent,
    Button
} from '@mui/material';
import {
    AccessTime,
    FlightTakeoff,
    LocalDining,
    LocalTaxi,
    Place,
    Star,
    WhatsApp,
    Phone,
    Landscape,
    Tour,
    KingBed
} from '@mui/icons-material';

import { styled } from '@mui/material/styles';
import { formatINR } from 'services/Utils';
import { isDesktop } from 'styles/breakpoints';

const GradientChip = styled(Chip)(({ theme }) => ({
    background: 'linear-gradient(to right, #43e97b, #38f9d7)',
    color: '#555',
    fontWeight: 500,
    margin: '4px',
}));

const DurationBox = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    fontWeight: 'bold',
    padding: '4px',
    borderRadius: '20px',
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: '0.75rem',
    gap: 6,
    marginBottom: theme.spacing(1.5),
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
}));

const TravelPackageCard = ({ packageData }) => {
    const {
        packageName,
        description,
        destination,
        duration,
        image,
        price,
        cities,
        sights,
        highlights
    } = packageData;

    const [openSights, setOpenSights] = useState(false);

    const renderHighlights = (highlights) => {
        const isCompact = highlights.length < 4
        return (
            <Box
                sx={{ m: isCompact ? '0 auto' : '0', my: 1 }}
                display="flex"
                flexWrap="wrap"
                flexDirection="row"
                width={isCompact ? 'fit-content' : '100%'}
            >
                {highlights.map((highlight, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'row', md: 'column' },
                            alignItems: { xs: 'flex-start', md: 'center' },
                            textAlign: 'center',
                            width: { xs: '50%', md: isCompact ? 150 : '25%' },
                            p: 1,
                        }}
                    >
                        {highlight.iconType === 'meals' && <LocalDining color="primary" />}
                        {highlight.iconType === 'sightseeing' && <Landscape color="primary" />}
                        {highlight.iconType === 'tour' && <Tour color="primary" />}
                        {highlight.iconType === 'flight' && <FlightTakeoff color="primary" />}
                        {highlight.iconType === 'hotel' && <KingBed color="primary" />}
                        {highlight.iconType === 'transfer' && <LocalTaxi color="primary" />}
                        <Typography fontSize={14} fontWeight="bold" mt={{ xs: 0, md: 0.5 }} ml={{ xs: 1, md: 0 }} textAlign={{ xs: 'left', md: 'center' }}>
                            {highlight.text}
                        </Typography>
                    </Box>
                ))}
            </Box>
        );
    };

    const renderSights = (sights) => {
        if (isDesktop()) {
            return <Box
                sx={{
                    border: '1px solid #ccc',
                    borderRadius: 3,
                    padding: 2,
                    marginTop: 2,
                    position: 'relative',
                }}
            >
                {/* Floating Label */}
                <Typography
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 16,
                        transform: 'translateY(-50%)',
                        backgroundColor: '#fff',
                        px: 1,
                        fontWeight: 'bold',
                        fontSize: '0.875rem',
                        color: 'text.primary',
                    }}
                >
                    Sights Covered
                </Typography>
                <Grid container spacing={1}>
                    {sights.map((sight, index) => (
                        <Grid key={index}>
                            <GradientChip
                                icon={<Place sx={{ color: 'goldenrod' }} />}
                                label={sight}
                                color="black"
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        } else {
            return <Box sx={{ width: '100%' }}>
                <Box display="flex" flexDirection="row" alignItems="center" justifyContent='space-between'>
                    <Button
                        startIcon={<Place />}
                        variant="contained"
                        onClick={() => setOpenSights(true)}
                    >
                        Sights
                    </Button>
                    {!isDesktop() && renderContactSection()}
                </Box>
                <Dialog open={openSights} onClose={() => setOpenSights(false)} fullWidth>
                    <DialogTitle>Sights Covered</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={1}>
                            {sights.map((sight, index) => (
                                <Grid key={index}>
                                    <GradientChip
                                        icon={<Place sx={{ color: 'goldenrod' }} />}
                                        label={sight}
                                        color="black"
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </DialogContent>
                </Dialog>
            </Box>
        }
    };

    const renderDuration = (duration) => (
        <Chip
            icon={<AccessTime />}
            label={`${duration.days} Days / ${duration.nights} Nights`}
            color="secondary"
            variant="filled"
            sx={{ marginBottom: 2, fontWeight: 'bold', fontSize: '0.875rem' }}
        />
    );

    const renderContactSection = () => (
        <Box
            sx={{
                p: 2,
                backgroundColor: { xs: '#fff', md: '#fafafa' },
                textAlign: 'center',
            }}
        >
            {isDesktop() && <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
                Contact Us
            </Typography>}
            <Stack direction={{ xs: "row", md: "column" }} spacing={{ xs: 2, md: 4 }} justifyContent="center">
                <Box sx={{ textAlign: 'center' }}>
                    <Tooltip title="Call Now On +91 98404 91037">
                        <a href="tel:+919840491037" style={{ textDecoration: 'none' }}>
                            <IconButton
                                sx={{
                                    backgroundColor: 'primary.light',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: 'primary.main',
                                        boxShadow: 3,
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                <Phone />
                            </IconButton>
                        </a>
                    </Tooltip>
                    {isDesktop() && <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
                        Call
                    </Typography>}
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                    <Tooltip title="Chat on WhatsApp">
                        <a
                            href="https://wa.me/917200492107"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none' }}
                        >
                            <IconButton
                                sx={{
                                    backgroundColor: '#25D366',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#1DA851',
                                        boxShadow: 3,
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                <WhatsApp />
                            </IconButton>
                        </a>
                    </Tooltip>
                    {isDesktop() && <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
                        WhatsApp
                    </Typography>}
                </Box>
            </Stack>
        </Box>
    );

    return (
        <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, m: 1.5, borderRadius: 2 }}>
            <Box sx={{ position: 'relative', width: { xs: '100%', md: 300 } }}>
                <Box overflow='hidden' width='100%' height='100%'>
                    <CardMedia
                        component="img"
                        image={image}
                        alt={packageName}
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'scale(1.05)' },
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        color: '#fff',
                        px: 2,
                        py: 1.5,
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3), transparent)',
                    }}
                >
                    <Typography variant="h6" sx={{ fontWeight: 'bold', lineHeight: 1.2, mb: 0.5 }}>
                        {packageName}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: '#A5D6A7',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                            px: 1,
                            py: 0.5,
                            borderRadius: 2,
                            display: 'inline-block',
                            boxShadow: '0 0 4px rgba(165, 214, 167, 0.5)',
                            textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
                        }}
                    >
                        {formatINR(price)} per couple
                    </Typography>
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        padding: '8px',
                    }}
                >
                    <DurationBox>
                        <AccessTime sx={{ fontSize: 16 }} /> 7 Days / 6 Nights
                    </DurationBox>
                </Box>
            </Box>

            {/* Content on the right */}
            <CardContent sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography variant="body2" paragraph>{description}</Typography>
                {renderHighlights(highlights)}
                {renderSights(sights)}
            </CardContent>
            {isDesktop() && renderContactSection()}
        </Card >
    );
};

export default TravelPackageCard;
