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
