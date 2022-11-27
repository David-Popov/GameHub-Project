using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace GameHubPortalApi.Repositories
{
    public class JwtService
    {
        public string SecretKey { get; set; }
        public int TokenDuration { get; set; }

        private readonly IConfiguration config;

        public JwtService(IConfiguration config)
        {
            this.config = config;
            SecretKey = config.GetSection("jwtConfig").GetSection("Key").Value;
            TokenDuration = int.Parse(config.GetSection("jwtConfig").GetSection("Duration").Value);
        }

        public string GenerateToken(string id, string email,string password, string role)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(SecretKey));

            var signature = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var payload = new[]
            {
                new Claim("id", id),
                new Claim("email", email),
                new Claim("password", password),
                new Claim("role", role)
            };


            var jwtToken = new JwtSecurityToken(
                issuer:"localhost",
                audience:"localhost",
                claims:payload,
                expires: DateTime.Now.AddMinutes(TokenDuration),
                signingCredentials:signature
                );
            
            return new JwtSecurityTokenHandler().WriteToken(jwtToken);

        }
    }
}
