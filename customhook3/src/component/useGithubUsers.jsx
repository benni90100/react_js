import useSWR from 'swr'
const fetcher = url=> fetch(url).then(res => res.json())

export function useGithubUsers(username) {

  const {data, error, mutate}=useSWR(`https://api.github.com/users/${username}`, fetcher)
      
function fetchGitubUser() {
  mutate()
}

  return {data, useFetchUser:fetchGitubUser};

}
