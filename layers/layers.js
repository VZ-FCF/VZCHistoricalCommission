var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VanZandtCounty_1 = new ol.format.GeoJSON();
var features_VanZandtCounty_1 = format_VanZandtCounty_1.readFeatures(json_VanZandtCounty_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VanZandtCounty_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VanZandtCounty_1.addFeatures(features_VanZandtCounty_1);
var lyr_VanZandtCounty_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VanZandtCounty_1, 
                style: style_VanZandtCounty_1,
                popuplayertitle: 'VanZandtCounty',
                interactive: false,
                title: '<img src="styles/legend/VanZandtCounty_1.png" /> VanZandtCounty'
            });
var format_ISD_2 = new ol.format.GeoJSON();
var features_ISD_2 = format_ISD_2.readFeatures(json_ISD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ISD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ISD_2.addFeatures(features_ISD_2);
var lyr_ISD_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ISD_2, 
                style: style_ISD_2,
                popuplayertitle: 'ISD',
                interactive: true,
                title: 'ISD'
            });
var format_MunicipalBoundaries_3 = new ol.format.GeoJSON();
var features_MunicipalBoundaries_3 = format_MunicipalBoundaries_3.readFeatures(json_MunicipalBoundaries_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipalBoundaries_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipalBoundaries_3.addFeatures(features_MunicipalBoundaries_3);
var lyr_MunicipalBoundaries_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipalBoundaries_3, 
                style: style_MunicipalBoundaries_3,
                popuplayertitle: 'MunicipalBoundaries',
                interactive: true,
                title: '<img src="styles/legend/MunicipalBoundaries_3.png" /> MunicipalBoundaries'
            });
var format_Cemeteries_4 = new ol.format.GeoJSON();
var features_Cemeteries_4 = format_Cemeteries_4.readFeatures(json_Cemeteries_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cemeteries_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cemeteries_4.addFeatures(features_Cemeteries_4);
var lyr_Cemeteries_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cemeteries_4, 
                style: style_Cemeteries_4,
                popuplayertitle: 'Cemeteries',
                interactive: true,
                title: '<img src="styles/legend/Cemeteries_4.png" /> Cemeteries'
            });
var format_HistoricalPlaces_5 = new ol.format.GeoJSON();
var features_HistoricalPlaces_5 = format_HistoricalPlaces_5.readFeatures(json_HistoricalPlaces_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HistoricalPlaces_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HistoricalPlaces_5.addFeatures(features_HistoricalPlaces_5);
var lyr_HistoricalPlaces_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HistoricalPlaces_5, 
                style: style_HistoricalPlaces_5,
                popuplayertitle: 'HistoricalPlaces',
                interactive: true,
                title: '<img src="styles/legend/HistoricalPlaces_5.png" /> HistoricalPlaces'
            });
var format_FlowingStreams_6 = new ol.format.GeoJSON();
var features_FlowingStreams_6 = format_FlowingStreams_6.readFeatures(json_FlowingStreams_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FlowingStreams_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FlowingStreams_6.addFeatures(features_FlowingStreams_6);
var lyr_FlowingStreams_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FlowingStreams_6, 
                style: style_FlowingStreams_6,
                popuplayertitle: 'FlowingStreams',
                interactive: false,
                title: '<img src="styles/legend/FlowingStreams_6.png" /> FlowingStreams'
            });
var format_CensusDesignatedPlaces_7 = new ol.format.GeoJSON();
var features_CensusDesignatedPlaces_7 = format_CensusDesignatedPlaces_7.readFeatures(json_CensusDesignatedPlaces_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CensusDesignatedPlaces_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CensusDesignatedPlaces_7.addFeatures(features_CensusDesignatedPlaces_7);
var lyr_CensusDesignatedPlaces_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CensusDesignatedPlaces_7, 
                style: style_CensusDesignatedPlaces_7,
                popuplayertitle: 'CensusDesignatedPlaces',
                interactive: true,
                title: '<img src="styles/legend/CensusDesignatedPlaces_7.png" /> CensusDesignatedPlaces'
            });
var format_VZC_HistoricalMarkersInProg_8 = new ol.format.GeoJSON();
var features_VZC_HistoricalMarkersInProg_8 = format_VZC_HistoricalMarkersInProg_8.readFeatures(json_VZC_HistoricalMarkersInProg_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VZC_HistoricalMarkersInProg_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VZC_HistoricalMarkersInProg_8.addFeatures(features_VZC_HistoricalMarkersInProg_8);
var lyr_VZC_HistoricalMarkersInProg_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VZC_HistoricalMarkersInProg_8, 
                style: style_VZC_HistoricalMarkersInProg_8,
                popuplayertitle: 'VZC_HistoricalMarkersInProg',
                interactive: true,
                title: '<img src="styles/legend/VZC_HistoricalMarkersInProg_8.png" /> VZC_HistoricalMarkersInProg'
            });

lyr_OSMStandard_0.setVisible(true);lyr_VanZandtCounty_1.setVisible(true);lyr_ISD_2.setVisible(false);lyr_MunicipalBoundaries_3.setVisible(true);lyr_Cemeteries_4.setVisible(false);lyr_HistoricalPlaces_5.setVisible(false);lyr_FlowingStreams_6.setVisible(false);lyr_CensusDesignatedPlaces_7.setVisible(false);lyr_VZC_HistoricalMarkersInProg_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_VanZandtCounty_1,lyr_ISD_2,lyr_MunicipalBoundaries_3,lyr_Cemeteries_4,lyr_HistoricalPlaces_5,lyr_FlowingStreams_6,lyr_CensusDesignatedPlaces_7,lyr_VZC_HistoricalMarkersInProg_8];
lyr_VanZandtCounty_1.set('fieldAliases', {'CMPTRL_CNT': 'CMPTRL_CNT', 'DPS_CNTY_N': 'DPS_CNTY_N', 'FIPS_ST_CN': 'FIPS_ST_CN', 'TXDOT_CNTY': 'TXDOT_CNTY', 'TXDOT_DIST': 'TXDOT_DIST', 'CNTY_NM': 'CNTY_NM', 'GID': 'GID', });
lyr_ISD_2.set('fieldAliases', {'GEOID20': 'GEOID20', 'NAME20': 'NAME20', 'SDLEA': 'SDLEA', 'NAME': 'NAME', 'NAME2': 'NAME2', 'DISTRICT_N': 'DISTRICT_N', 'DISTRICT': 'DISTRICT', 'DISTRICT_C': 'DISTRICT_C', 'NCES_DISTR': 'NCES_DISTR', 'COLOR': 'COLOR', 'Shape_area': 'Shape_area', 'Shape_len': 'Shape_len', 'Web Site': 'Web Site', });
lyr_MunicipalBoundaries_3.set('fieldAliases', {'STATEFP': 'STATEFP', 'PLACEFP': 'PLACEFP', 'PLACENS': 'PLACENS', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'PCICBSA': 'PCICBSA', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Web Site': 'Web Site', 'More...': 'More...', });
lyr_Cemeteries_4.set('fieldAliases', {'name': 'Cemetery Name', 'latitude': 'latitude', 'longitude': 'longitude', 'type': 'Designation', 'descriptio': 'descriptio', 'source': 'source', 'date': 'date', });
lyr_HistoricalPlaces_5.set('fieldAliases', {'CITY_NM': 'CITY_NM', 'CITY_NBR': 'CITY_NBR', 'CITY_FIPS': 'CITY_FIPS', 'INC_FLAG': 'INC_FLAG', 'CNTY_SEAT': 'CNTY_SEAT', 'POP1990': 'POP1990', 'POP2000': 'POP2000', 'POP2010': 'POP2010', 'POP2020': 'POP2020', 'CNTY_NBR': 'CNTY_NBR', 'DIST_NBR': 'DIST_NBR', 'CNTY_NM': 'CNTY_NM', 'DIST_NM': 'DIST_NM', });
lyr_FlowingStreams_6.set('fieldAliases', {'STRM_TYPE': 'STRM_TYPE', 'STRM_NM': 'STRM_NM', 'DISPLAY': 'DISPLAY', 'DISPLAY_AL': 'DISPLAY_AL', });
lyr_CensusDesignatedPlaces_7.set('fieldAliases', {'CITY_NM': 'CITY_NM', 'CITY_NBR': 'CITY_NBR', 'CITY_FIPS': 'CITY_FIPS', 'INC_FLAG': 'INC_FLAG', 'CNTY_SEAT': 'CNTY_SEAT', 'POP1990': 'POP1990', 'POP2000': 'POP2000', 'POP2010': 'POP2010', 'POP2020': 'POP2020', 'CNTY_NBR': 'CNTY_NBR', 'DIST_NBR': 'DIST_NBR', 'CNTY_NM': 'CNTY_NM', 'DIST_NM': 'DIST_NM', });
lyr_VZC_HistoricalMarkersInProg_8.set('fieldAliases', {'HM': 'HM', 'City': 'City', 'THC': 'THC', 'Name': 'Name', 'Location': 'Location', 'latitude': 'Latitude', 'longitude': 'Longitude', 'descriptio': 'descriptio', 'source': 'source', 'date': 'date', 'Date_1': 'Date', 'Marker': 'Marker', });
lyr_VanZandtCounty_1.set('fieldImages', {'CMPTRL_CNT': 'TextEdit', 'DPS_CNTY_N': 'TextEdit', 'FIPS_ST_CN': 'TextEdit', 'TXDOT_CNTY': 'TextEdit', 'TXDOT_DIST': 'TextEdit', 'CNTY_NM': 'TextEdit', 'GID': 'TextEdit', });
lyr_ISD_2.set('fieldImages', {'GEOID20': 'TextEdit', 'NAME20': 'TextEdit', 'SDLEA': 'TextEdit', 'NAME': 'TextEdit', 'NAME2': 'TextEdit', 'DISTRICT_N': 'TextEdit', 'DISTRICT': 'TextEdit', 'DISTRICT_C': 'TextEdit', 'NCES_DISTR': 'TextEdit', 'COLOR': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_len': 'TextEdit', 'Web Site': 'TextEdit', });
lyr_MunicipalBoundaries_3.set('fieldImages', {'STATEFP': 'TextEdit', 'PLACEFP': 'TextEdit', 'PLACENS': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'PCICBSA': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'Web Site': 'TextEdit', 'More...': 'TextEdit', });
lyr_Cemeteries_4.set('fieldImages', {'name': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'type': 'TextEdit', 'descriptio': 'TextEdit', 'source': 'TextEdit', 'date': 'TextEdit', });
lyr_HistoricalPlaces_5.set('fieldImages', {'CITY_NM': 'TextEdit', 'CITY_NBR': 'TextEdit', 'CITY_FIPS': 'TextEdit', 'INC_FLAG': 'TextEdit', 'CNTY_SEAT': 'TextEdit', 'POP1990': 'TextEdit', 'POP2000': 'TextEdit', 'POP2010': 'TextEdit', 'POP2020': 'TextEdit', 'CNTY_NBR': 'Range', 'DIST_NBR': 'Range', 'CNTY_NM': 'TextEdit', 'DIST_NM': 'TextEdit', });
lyr_FlowingStreams_6.set('fieldImages', {'STRM_TYPE': 'TextEdit', 'STRM_NM': 'TextEdit', 'DISPLAY': 'Range', 'DISPLAY_AL': 'Range', });
lyr_CensusDesignatedPlaces_7.set('fieldImages', {'CITY_NM': 'TextEdit', 'CITY_NBR': 'TextEdit', 'CITY_FIPS': 'TextEdit', 'INC_FLAG': 'TextEdit', 'CNTY_SEAT': 'TextEdit', 'POP1990': 'TextEdit', 'POP2000': 'TextEdit', 'POP2010': 'TextEdit', 'POP2020': 'TextEdit', 'CNTY_NBR': 'Range', 'DIST_NBR': 'Range', 'CNTY_NM': 'TextEdit', 'DIST_NM': 'TextEdit', });
lyr_VZC_HistoricalMarkersInProg_8.set('fieldImages', {'HM': 'TextEdit', 'City': 'TextEdit', 'THC': 'TextEdit', 'Name': 'TextEdit', 'Location': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'descriptio': 'TextEdit', 'source': 'TextEdit', 'date': 'TextEdit', 'Date_1': 'TextEdit', 'Marker': 'TextEdit', });
lyr_VanZandtCounty_1.set('fieldLabels', {'CMPTRL_CNT': 'hidden field', 'DPS_CNTY_N': 'hidden field', 'FIPS_ST_CN': 'hidden field', 'TXDOT_CNTY': 'hidden field', 'TXDOT_DIST': 'hidden field', 'CNTY_NM': 'hidden field', 'GID': 'hidden field', });
lyr_ISD_2.set('fieldLabels', {'GEOID20': 'hidden field', 'NAME20': 'no label', 'SDLEA': 'hidden field', 'NAME': 'hidden field', 'NAME2': 'hidden field', 'DISTRICT_N': 'hidden field', 'DISTRICT': 'hidden field', 'DISTRICT_C': 'hidden field', 'NCES_DISTR': 'hidden field', 'COLOR': 'hidden field', 'Shape_area': 'hidden field', 'Shape_len': 'hidden field', 'Web Site': 'hidden field', });
lyr_MunicipalBoundaries_3.set('fieldLabels', {'STATEFP': 'hidden field', 'PLACEFP': 'hidden field', 'PLACENS': 'hidden field', 'GEOID': 'hidden field', 'GEOIDFQ': 'hidden field', 'NAME': 'no label', 'NAMELSAD': 'hidden field', 'LSAD': 'hidden field', 'CLASSFP': 'hidden field', 'PCICBSA': 'hidden field', 'MTFCC': 'hidden field', 'FUNCSTAT': 'hidden field', 'ALAND': 'hidden field', 'AWATER': 'hidden field', 'INTPTLAT': 'hidden field', 'INTPTLON': 'hidden field', 'Web Site': 'inline label - visible with data', 'More...': 'inline label - visible with data', });
lyr_Cemeteries_4.set('fieldLabels', {'name': 'no label', 'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'type': 'hidden field', 'descriptio': 'hidden field', 'source': 'inline label - visible with data', 'date': 'hidden field', });
lyr_HistoricalPlaces_5.set('fieldLabels', {'CITY_NM': 'no label', 'CITY_NBR': 'hidden field', 'CITY_FIPS': 'hidden field', 'INC_FLAG': 'hidden field', 'CNTY_SEAT': 'hidden field', 'POP1990': 'hidden field', 'POP2000': 'hidden field', 'POP2010': 'hidden field', 'POP2020': 'hidden field', 'CNTY_NBR': 'hidden field', 'DIST_NBR': 'hidden field', 'CNTY_NM': 'hidden field', 'DIST_NM': 'hidden field', });
lyr_FlowingStreams_6.set('fieldLabels', {'STRM_TYPE': 'hidden field', 'STRM_NM': 'no label', 'DISPLAY': 'hidden field', 'DISPLAY_AL': 'hidden field', });
lyr_CensusDesignatedPlaces_7.set('fieldLabels', {'CITY_NM': 'no label', 'CITY_NBR': 'hidden field', 'CITY_FIPS': 'hidden field', 'INC_FLAG': 'hidden field', 'CNTY_SEAT': 'hidden field', 'POP1990': 'hidden field', 'POP2000': 'hidden field', 'POP2010': 'hidden field', 'POP2020': 'hidden field', 'CNTY_NBR': 'hidden field', 'DIST_NBR': 'no label', 'CNTY_NM': 'hidden field', 'DIST_NM': 'hidden field', });
lyr_VZC_HistoricalMarkersInProg_8.set('fieldLabels', {'HM': 'hidden field', 'City': 'hidden field', 'THC': 'inline label - always visible', 'Name': 'inline label - visible with data', 'Location': 'hidden field', 'latitude': 'inline label - always visible', 'longitude': 'inline label - always visible', 'descriptio': 'hidden field', 'source': 'hidden field', 'date': 'hidden field', 'Date_1': 'inline label - visible with data', 'Marker': 'inline label - visible with data', });
lyr_VZC_HistoricalMarkersInProg_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});