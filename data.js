const ENGINE_ROWS = `4A-FE|A|1.6L|I4|Petrol|Corolla,Carina|Discontinued
4A-GE|A|1.6L|I4|Petrol|Corolla,Sprinter,MR2|Discontinued
7A-FE|A|1.8L|I4|Petrol|Corolla,Carina,Avensis|Discontinued
3S-FE|S|2.0L|I4|Petrol|Camry,Celica,RAV4|Discontinued
3S-GE|S|2.0L|I4|Petrol|Celica,Altezza,MR2|Discontinued
3S-GTE|S|2.0L|I4 Turbo|Petrol|Celica GT-Four,MR2 Turbo|Discontinued
5S-FE|S|2.2L|I4|Petrol|Camry,Celica|Discontinued
1JZ-GE|JZ|2.5L|I6|Petrol|Crown,Chaser,Mark II|Discontinued
1JZ-GTE|JZ|2.5L|I6 Turbo|Petrol|Chaser,Soarer,Mark II|Discontinued
2JZ-GE|JZ|3.0L|I6|Petrol|Supra,Aristo,Lexus GS|Discontinued
2JZ-GTE|JZ|3.0L|I6 Turbo|Petrol|Supra,Aristo|Discontinued
1UZ-FE|UZ|4.0L|V8|Petrol|Lexus LS,Lexus SC,Crown|Discontinued
2UZ-FE|UZ|4.7L|V8|Petrol|Land Cruiser,Sequoia,Tundra|Discontinued
3UZ-FE|UZ|4.3L|V8|Petrol|Lexus LS,Lexus GS,Lexus SC|Discontinued
3VZ-E|VZ|3.0L|V6|Petrol|4Runner,Pickup|Discontinued
3VZ-FE|VZ|3.0L|V6|Petrol|Camry,Lexus ES|Discontinued
5VZ-FE|VZ|3.4L|V6|Petrol|Tacoma,4Runner,T100|Discontinued
1MZ-FE|MZ|3.0L|V6|Petrol|Camry,Avalon,Lexus ES,Lexus RX|Discontinued
3MZ-FE|MZ|3.3L|V6|Petrol|Camry,Highlander,Lexus RX|Discontinued
1NZ-FE|NZ|1.5L|I4|Petrol|Yaris,Vitz,Echo,Scion xB|Legacy
1NZ-FXE|NZ|1.5L|I4 Hybrid|Hybrid|Prius,Aqua,Prius c|Legacy
2NZ-FE|NZ|1.3L|I4|Petrol|Yaris,Vitz,Platz|Legacy
1ZZ-FE|ZZ|1.8L|I4|Petrol|Corolla,Matrix,Celica,MR2|Discontinued
2ZZ-GE|ZZ|1.8L|I4|Petrol|Celica,Corolla XRS,Matrix XRS|Discontinued
3ZZ-FE|ZZ|1.6L|I4|Petrol|Corolla,Avensis|Discontinued
1AZ-FE|AZ|2.0L|I4|Petrol|Avensis,RAV4|Legacy
2AZ-FE|AZ|2.4L|I4|Petrol|Camry,RAV4,Scion tC,Highlander|Legacy
2AZ-FXE|AZ|2.4L|I4 Hybrid|Hybrid|Camry Hybrid,Highlander Hybrid|Legacy
1ZR-FE|ZR|1.6L|I4|Petrol|Corolla,Auris|Active by market
2ZR-FE|ZR|1.8L|I4|Petrol|Corolla,Matrix,Auris|Active by market
2ZR-FAE|ZR|1.8L|I4 Valvematic|Petrol|Corolla,Auris,Avensis|Active by market
2ZR-FXE|ZR|1.8L|I4 Hybrid|Hybrid|Prius,Corolla Hybrid,Lexus CT|Active
3ZR-FE|ZR|2.0L|I4|Petrol|RAV4,Avensis,Noah|Regional
3ZR-FAE|ZR|2.0L|I4 Valvematic|Petrol|RAV4,Avensis,Noah|Regional
1NR-FE|NR|1.3L|I4|Petrol|Yaris,Auris|Regional
2NR-FE|NR|1.5L|I4|Petrol|Yaris,Vios|Active by market
1KR-FE|KR|1.0L|I3|Petrol|Aygo,Yaris,Passo|Active by market
1AR-FE|AR|2.7L|I4|Petrol|Venza,Highlander|Legacy
2AR-FE|AR|2.5L|I4|Petrol|Camry,RAV4,Scion tC,Lexus ES|Legacy
2AR-FXE|AR|2.5L|I4 Hybrid|Hybrid|Camry Hybrid,Avalon Hybrid,Lexus ES Hybrid|Legacy
8AR-FTS|AR|2.0L|I4 Turbo|Petrol|Lexus NX,Lexus RX,Lexus IS|Legacy
1GR-FE|GR|4.0L|V6|Petrol|Prado,4Runner,Tacoma,FJ Cruiser|Active by market
2GR-FE|GR|3.5L|V6|Petrol|Camry,Avalon,Sienna,Highlander,Lexus RX|Legacy
2GR-FSE|GR|3.5L|V6 DI|Petrol|Lexus IS,Lexus GS,Crown|Legacy
2GR-FKS|GR|3.5L|V6 D-4S|Petrol|Tacoma,Highlander,Lexus RX|Active
2GR-FXS|GR|3.5L|V6 Hybrid|Hybrid|Highlander Hybrid,Lexus RX Hybrid|Active
1UR-FE|UR|4.6L|V8|Petrol|Land Cruiser,Lexus LS,Lexus GS|Regional
2UR-GSE|UR|5.0L|V8|Petrol|Lexus IS F,Lexus RC F,Lexus GS F|Active niche
3UR-FE|UR|5.7L|V8|Petrol|Tundra,Sequoia,Land Cruiser|Legacy
1TR-FE|TR|2.0L|I4|Petrol|HiAce,Hilux|Active by market
2TR-FE|TR|2.7L|I4|Petrol|Hilux,Fortuner,Tacoma,HiAce|Active
1KZ-TE|KZ|3.0L|I4 Turbo|Diesel|Hilux,Prado,HiAce|Discontinued
1KD-FTV|KD|3.0L|I4 Turbo|Diesel|Hilux,Prado,Fortuner,HiAce|Legacy
2KD-FTV|KD|2.5L|I4 Turbo|Diesel|Hilux,HiAce,Fortuner|Legacy
1GD-FTV|GD|2.8L|I4 Turbo|Diesel|Hilux,Prado,Fortuner,HiAce|Active
2GD-FTV|GD|2.4L|I4 Turbo|Diesel|Hilux,Fortuner,Innova,HiAce|Active
3GD-FTV|GD|2.8L|I4 Turbo|Diesel|Commercial applications|Regional
1HZ|HZ|4.2L|I6|Diesel|Land Cruiser 70,Land Cruiser 80,Coaster|Legacy
1HD-T|HD|4.2L|I6 Turbo|Diesel|Land Cruiser 80|Discontinued
1HD-FT|HD|4.2L|I6 Turbo|Diesel|Land Cruiser 80|Discontinued
1HD-FTE|HD|4.2L|I6 Turbo|Diesel|Land Cruiser 100,Land Cruiser 70|Discontinued
1VD-FTV|VD|4.5L|V8 Turbo|Diesel|Land Cruiser 70,Land Cruiser 200|Legacy
1ND-TV|ND|1.4L|I4 Turbo|Diesel|Yaris,Auris,Corolla|Discontinued
M15A-FKS|Dynamic Force|1.5L|I3|Petrol|Yaris,Yaris Cross|Active
M15A-FXE|Dynamic Force|1.5L|I3 Hybrid|Hybrid|Yaris Hybrid,Yaris Cross Hybrid|Active
M20A-FKS|Dynamic Force|2.0L|I4|Petrol|Corolla,RAV4,Lexus UX|Active
M20A-FXS|Dynamic Force|2.0L|I4 Hybrid|Hybrid|Corolla Hybrid,Lexus UX Hybrid|Active
A25A-FKS|Dynamic Force|2.5L|I4|Petrol|Camry,RAV4,Highlander|Active
A25A-FXS|Dynamic Force|2.5L|I4 Hybrid|Hybrid|Camry Hybrid,RAV4 Hybrid,Highlander Hybrid|Active
T24A-FTS|Dynamic Force|2.4L|I4 Turbo|Petrol|Highlander,Crown,Lexus applications|Active
G16E-GTS|G16E|1.6L|I3 Turbo|Petrol|GR Yaris,GR Corolla|Active niche
V35A-FTS|V35A|3.4L|V6 Twin Turbo|Petrol|Land Cruiser 300,Tundra,Lexus LX|Active
F33A-FTV|F33A|3.3L|V6 Twin Turbo|Diesel|Land Cruiser 300,Lexus LX|Active`;
window.ENGINES=ENGINE_ROWS.trim().split('\n').map((r,i)=>{const [code,family,displacement,configuration,fuel,cars,status]=r.split('|');return{id:i+1,code,family,displacement,configuration,fuel,cars:cars.split(','),status}});
window.FAMILY_NOTES={GR:'V6 family spanning passenger cars, SUVs, pickups and Lexus. Strong cross-market sourcing relevance.',ZR:'High-volume compact four-cylinder family with major petrol and hybrid applications.',AR:'Midsize four-cylinder family covering petrol, hybrid and premium turbo applications.',KD:'Older common-rail diesel family central to Hilux, Prado, Fortuner and HiAce fleets.',GD:'Newer Toyota diesel family with strong 4x4 and commercial-vehicle relevance.',JZ:'Legacy inline-six family with performance and enthusiast value rather than commodity replacement volume.','Dynamic Force':'Toyota newer modular engine generation spanning efficient petrol, hybrid and turbo applications.',UZ:'Legacy V8 family used heavily in Lexus and larger Toyota vehicles.',NZ:'Compact petrol/hybrid family with broad small-car circulation.'};

window.ENGINE_INTEL={
"1GR-FE":{era:"2002–present, market dependent",summary:"Large-displacement Toyota V6 used across high-value 4x4 and pickup platforms. Commercially interesting because its donor and replacement markets span North America, the Gulf, Africa and Australia.",strengths:["Broad SUV and pickup application base","Strong 4x4 market relevance","Long production life"],issues:["Inspect cooling system history","Check for oil and coolant leaks","Confirm exact donor accessories and electronics"],buy:["Cold-start video","Compression or leak-down result","Engine number and donor VIN","Mileage evidence","Included ECU, harness and accessories"]},
"2GR-FE":{era:"2004–2020s, application dependent",summary:"High-volume 3.5L V6 found across Toyota and Lexus passenger cars, crossovers and vans. A useful engine to track because one code spans many fitment variants.",strengths:["Very broad vehicle application","Large donor pool","Toyota and Lexus coverage"],issues:["Check oil leaks around common sealing points","Verify application-specific accessories","Confirm exact generation before interchange"],buy:["VIN and donor model","Compression result","Oil condition","Harness and ECU details","Accessory configuration"]},
"2AR-FE":{era:"2008–2020s, application dependent",summary:"High-volume 2.5L four-cylinder used in mainstream Toyota and Lexus vehicles. Attractive for replacement-engine research because of broad circulation.",strengths:["Large mainstream fleet","Multiple high-volume models","Common replacement category"],issues:["Confirm exact model-year interchange","Inspect oil and coolant condition","Check donor history"],buy:["Donor VIN","Mileage evidence","Compression test","Cold start","Included accessories"]},
"2ZR-FE":{era:"2006–present, market dependent",summary:"Compact 1.8L four-cylinder with broad Corolla-family circulation across many markets.",strengths:["High-volume compact applications","Wide geographic footprint","Common donor platform"],issues:["Verify variant and market","Inspect oil consumption history","Check cooling and service condition"],buy:["Engine code photo","Donor VIN","Mileage","Compression","Cold start"]},
"1KD-FTV":{era:"2000–2010s, market dependent",summary:"3.0L common-rail diesel strongly associated with Hilux, Prado, Fortuner and HiAce fleets outside North America.",strengths:["Strong commercial and 4x4 demand","Wide emerging-market footprint","Valuable diesel replacement category"],issues:["Injector condition matters","Inspect turbo and oiling history","Confirm emissions and ECU specification by market"],buy:["Injector data if available","Cold start","Blow-by check","Turbo condition","Donor VIN"]},
"1GD-FTV":{era:"2015–present",summary:"Newer 2.8L Toyota diesel used in Hilux, Prado, Fortuner and HiAce. Important for newer 4x4 and commercial fleets.",strengths:["Current-generation fleet relevance","Strong utility vehicle applications","High-value replacement category"],issues:["Emissions hardware varies by market","Verify ECU and accessory specification","Inspect fuel-system history"],buy:["Donor VIN","Diagnostic scan","Cold start","Compression","Complete emissions/accessory list"]},
"1NZ-FE":{era:"1999–2020s, market dependent",summary:"Small 1.5L Toyota engine with extensive global use in Yaris/Vitz/Echo-class vehicles and related platforms.",strengths:["Large global small-car population","Compact and freight-friendly","Broad donor availability"],issues:["Age and mileage vary widely","Confirm electronic throttle/accessory variant","Inspect oil consumption and service history"],buy:["Mileage evidence","Compression","Cold start","Donor model/year","Accessory photos"]}
};
window.MARKET_DATA={
"1GR-FE":[["United States",37.1,-95.7,5,"Tacoma · 4Runner · FJ Cruiser"],["Saudi Arabia",23.9,45.1,5,"Prado · FJ Cruiser"],["United Arab Emirates",23.4,53.8,5,"Prado · FJ Cruiser"],["Australia",-25.3,133.8,4,"Prado · Hilux-related 4x4 market"],["Oman",21.5,55.9,4,"Prado · FJ Cruiser"],["South Africa",-30.6,22.9,3,"Prado · 4x4 market"],["Jordan",31.2,36.5,3,"Prado · FJ Cruiser"]],
"2GR-FE":[["United States",37.1,-95.7,5,"Camry · Sienna · Highlander · Lexus"],["Canada",56.1,-106.3,4,"Camry · Sienna · Highlander · Lexus"],["United Arab Emirates",23.4,53.8,3,"Toyota · Lexus"],["Australia",-25.3,133.8,3,"Camry · Aurion · Lexus"],["Japan",36.2,138.3,3,"Toyota · Lexus donor supply"]],
"2AR-FE":[["United States",37.1,-95.7,5,"Camry · RAV4 · Scion tC"],["Canada",56.1,-106.3,4,"Camry · RAV4"],["Saudi Arabia",23.9,45.1,4,"Camry"],["United Arab Emirates",23.4,53.8,4,"Camry · Lexus ES"],["Jordan",31.2,36.5,3,"Camry · RAV4"],["Japan",36.2,138.3,3,"Donor supply"]],
"2ZR-FE":[["United States",37.1,-95.7,5,"Corolla · Matrix"],["Canada",56.1,-106.3,4,"Corolla · Matrix"],["Jordan",31.2,36.5,5,"Corolla"],["Saudi Arabia",23.9,45.1,5,"Corolla"],["United Arab Emirates",23.4,53.8,4,"Corolla"],["South Africa",-30.6,22.9,4,"Corolla · Auris"],["Australia",-25.3,133.8,4,"Corolla"],["Japan",36.2,138.3,4,"Corolla · Auris donor supply"]],
"1KD-FTV":[["Australia",-25.3,133.8,5,"Hilux · Prado"],["Saudi Arabia",23.9,45.1,5,"Hilux · Prado · Fortuner"],["United Arab Emirates",23.4,53.8,5,"Hilux · Prado · Fortuner"],["South Africa",-30.6,22.9,5,"Hilux · Fortuner"],["Jordan",31.2,36.5,4,"Hilux · Prado"],["Kenya",-0.02,37.9,4,"Hilux · Prado · HiAce"],["Thailand",15.8,100.9,5,"Hilux · Fortuner"],["Japan",36.2,138.3,3,"HiAce · donor supply"]],
"1GD-FTV":[["Australia",-25.3,133.8,5,"Hilux · Prado"],["Saudi Arabia",23.9,45.1,5,"Hilux · Prado · Fortuner"],["United Arab Emirates",23.4,53.8,5,"Hilux · Prado · Fortuner"],["South Africa",-30.6,22.9,5,"Hilux · Fortuner"],["Thailand",15.8,100.9,5,"Hilux · Fortuner"],["Kenya",-0.02,37.9,4,"Hilux · Prado"],["Jordan",31.2,36.5,4,"Hilux · Prado"]],
"1NZ-FE":[["Japan",36.2,138.3,5,"Vitz · Yaris donor supply"],["Jordan",31.2,36.5,5,"Yaris · Echo"],["Pakistan",30.4,69.3,4,"Vitz · small Toyota imports"],["Kenya",-0.02,37.9,4,"Vitz · Yaris"],["United Arab Emirates",23.4,53.8,4,"Yaris · re-export market"],["United Kingdom",55.4,-3.4,3,"Yaris"],["Australia",-25.3,133.8,3,"Yaris · Echo"]]
};
window.MARKET_DEFAULT=[["Japan",36.2,138.3,4,"Major Toyota donor/export market"],["United Arab Emirates",23.4,53.8,4,"Regional trading and re-export hub"],["United States",37.1,-95.7,3,"Large Toyota vehicle population"],["Australia",-25.3,133.8,3,"Toyota 4x4 and passenger fleet"],["Saudi Arabia",23.9,45.1,3,"Large Toyota market"]];

window.RESEARCH_METRICS={
"1GR-FE":{fleet:"Research pending",repair:"Research pending",salvage:"US feed feasible",age:"Research pending",confidence:"Building",sources:["Toyota vehicle sales","Copart salvage","NHTSA reliability"]},
"1KD-FTV":{fleet:"Research pending",repair:"Research pending",salvage:"Research pending",age:"Research pending",confidence:"Building",sources:["Toyota vehicle sales","country registration data"]},
"2ZR-FE":{fleet:"Research pending",repair:"Research pending",salvage:"US feed feasible",age:"Research pending",confidence:"Building",sources:["Toyota vehicle sales","Copart salvage","NHTSA reliability"]}
};
window.PUBLIC_SALES=[
{period:"FY2025",region:"Global",vehicle:"Corolla",value:1661,unit:"000 vehicles",source:"Toyota Integrated Report 2025"},
{period:"FY2025",region:"Global",vehicle:"RAV4",value:1047,unit:"000 vehicles",source:"Toyota Integrated Report 2025"},
{period:"FY2025",region:"Global",vehicle:"Yaris",value:908,unit:"000 vehicles",source:"Toyota Integrated Report 2025"},
{period:"FY2025",region:"Global",vehicle:"Camry",value:591,unit:"000 vehicles",source:"Toyota Integrated Report 2025"},
{period:"FY2025",region:"Global",vehicle:"Hilux",value:580,unit:"000 vehicles",source:"Toyota Integrated Report 2025"},
{period:"FY2024",region:"North America",vehicle:"Tacoma",value:226,unit:"000 vehicles",source:"Toyota Integrated Report 2024"},
{period:"FY2024",region:"North America",vehicle:"4Runner",value:139,unit:"000 vehicles",source:"Toyota Integrated Report 2024"},
{period:"FY2024",region:"Asia ex China",vehicle:"Hilux",value:179,unit:"000 vehicles",source:"Toyota Integrated Report 2024"},
{period:"FY2024",region:"Asia ex China",vehicle:"Fortuner",value:92,unit:"000 vehicles",source:"Toyota Integrated Report 2024"}
];